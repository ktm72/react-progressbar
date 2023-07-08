import 'intersection-observer';
import React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import ProgressBar from '../src';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<ProgressBar />);
  });
});

describe('Change height', () => {
  it('Height should be number', () => {
    render(<ProgressBar height={15} />);
  });
});
