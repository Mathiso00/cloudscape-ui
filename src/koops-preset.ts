import { definePreset } from 'unocss'

export default definePreset(() => {
  return {
    name: 'koops-preset',
    theme: {
      colors: {
        tertiary: {
          50: '#F4F6F7',
          100: '#E3E7EA',
          200: '#CBD3D6',
          300: '#A6B3BA',
          400: '#7A8C96',
          500: '#5F717B',
          600: '#525F68',
          700: '#465058',
          800: '#3F454B',
          900: '#373D42',
          950: '#22262A',
        },
        primary: {
          50: '#F0F7FE',
          100: '#DDECFD',
          200: '#C2DFFB',
          300: '#99CCF7',
          400: '#68B0F2',
          500: '#4590EC',
          600: '#3074E0',
          700: '#275FCE',
          800: '#264DA7',
          900: '#244484',
          950: '#1A2B51',
        },
        secondary: {
          50: '#F0F5FD',
          100: '#E4EDFB',
          200: '#CFDEF6',
          300: '#B1C8F0',
          400: '#91AAE8',
          500: '#7C91DF',
          600: '#5C6CCF',
          700: '#4C58B6',
          800: '#404B93',
          900: '#394276',
          950: '#222644',
        },

      },
    },
  }
})
