import React, { useEffect, useState, useRef } from 'react';
import getBorderRadius from './GetBorder';
import './progress.css';

const ProgressBar: React.FC<props> = ({
  height = 10,
  completed = 50,
  start = 10,
  duration = 2000,
  trackBgColor = '#eeeeee',
  trackColor = '#f35c27',
  textBgColor = 'transparent',
  textColor = '#1b1d1b',
  border = 'round',
  suffix = '%',
}) => {
  const [progress, setProgress] = useState(start);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
        timeout = setTimeout(() => {
          setProgress(completed);
        }, 150);
      }
    });
    const c = containerRef.current;

    if (c) {
      observer.observe(c);
    }
    return () => {
      if (c) {
        clearTimeout(timeout);
        observer.unobserve(c);
      }
    };
  }, [completed]);

  return (
    <div ref={containerRef}>
      {isVisible && (
        <div
          className='progress__container'
          style={{
            height: height,
            backgroundColor: trackBgColor,
            borderRadius: getBorderRadius(border),
          }}
        >
          <div
            className='progress__track'
            style={{
              width: `${progress}%`,
              backgroundColor: trackColor,
              transition: `width ${duration}ms ease-in-out`,
            }}
          >
            <span className='progress__textbar' style={{ backgroundColor: textBgColor, color: textColor }}>
              <span className='progress__label' style={{ backgroundColor: textBgColor }}></span>
              {progress}
              {suffix}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
