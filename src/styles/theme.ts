import { css } from 'styled-components';

export const theme = {
  colors: {
    primary: '#0D6EFD',
    secondary: '#6C757D',
    success: '#198754',
    danger: '#DC3545',
    warning: '#FFC107',
    info: '#0DCAF0',
    light: '#F8F9FA',
    dark: '#212529',
    white: '#FFFFFF',
    black: '#000000',
    selectedBlue: '#1e90ff',
    primaryDark: '#1c7ed6',
    grayHover: '#f0f0f0',
    grayLight: '#cccccc',
    background: '#F4F5F7',
    cardBackground: '#FFFFFF',
    text: '#212529',
    mutedText: '#6C757D',
    bodyBackground: '#D8DFE6',
    neutralTitle: '#77818C',
    neutralGray: '#77818C',
    borderCard: '#D8DFE6',
    cardFilterActive: '#2188FF',
    cardFilterDeactivate: '#ffffff',
    headerBackground: '#1a1b27',
    buttonActive: '#2E93FF',
    buttonInactive: '#162447',
    buttonHover: '#1C2B3A',
    buttonTextActive: '#FFFFFF',
    buttonTextInactive: '#A9A9A9',
    buttonShadow: 'rgba(46, 147, 255, 0.4)',
    statusOperating: '#52C41A',
    statusError: '#ED3833',
    sensorTitle: '#2188FF',
  },
  fonts: {
    fontFamily: "'Inter', sans-serif",
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  style: {
    center: css`
      justify-content: center;
      align-items: center;
    `,
  },
};
