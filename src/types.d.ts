interface props {
  trackBgColor?: string;
  trackColor?: string;
  textBgColor?: string;
  textColor?: string;
  completed?: number;
  height?: number;
  start?: number;
  duration?: number;
  border?: string;
  suffix?: string;
}

type GetBorderRadius = (border: string) => string;
