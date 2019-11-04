export const colors = {
  blue: 'var(--ab-color-blue)',
  washedblue: 'var(--ab-color-washedblue)',
  red: 'red'
};

export const borderRadius = [1, 3, 5, 8, 20];

//taken from bulma - see https://bulma.io/documentation/overview/responsiveness/
export const breakpoints = ['40em', '52em', '64em'];

export default {
  breakpoints,
  colors,
  space: [
    'var(--ab-space-0)',
    'var(--ab-space-1)',
    'var(--ab-space-2)',
    'var(--ab-space-3)',
    'var(--ab-space-4)',
    'var(--ab-space-5)',
    'var(--ab-space-6)',
    'var(--ab-space-7)'
  ],
  fontSizes: [
    'var(--ab-font-size-0)',
    'var(--ab-font-size-1)',
    'var(--ab-font-size-2)',
    'var(--ab-font-size-3)',
    'var(--ab-font-size-4)',
    'var(--ab-font-size-5)',
    'var(--ab-font-size-6)',
    'var(--ab-font-size-7)'
  ],
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  borderRadius
};
