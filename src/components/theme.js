export const colors = {
  blue: '#1380c4'
};

export const borderRadius = [1, 3, 5, 8, 20];

//taken from bulma - see https://bulma.io/documentation/overview/responsiveness/
export const breakpoints = [768, 1024, 1216, 1408];

export default {
  breakpoints,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  borderRadius
};
