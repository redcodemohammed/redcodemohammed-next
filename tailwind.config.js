const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        'fira-code': ['Fira Code', 'sans-serif'],
        'ibm-plex-sans-arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        1: '1px 1px 0px #000000',
        2: '2px 2px 0px #000000',
        3: '3px 3px 0px #000000',
        4: '4px 4px 0px #000000',
        5: '5px 5px 0px #000000',
        6: '6px 6px 0px #000000',
        7: '7px 7px 0px #000000',
        8: '8px 8px 0px #000000',
        9: '9px 9px 0px #000000'
      }
    },
    colors: {
      white: '#fff',
      black: '#000',
      background: {
        DEFAULT: '#282A36',
        50: '#C0C2D0',
        100: '#B4B7C8',
        200: '#9DA0B6',
        300: '#858AA5',
        400: '#6E7393',
        500: '#5C617C',
        600: '#4B4E65',
        700: '#393C4D',
        800: '#282A36',
        900: '#101116'
      },
      comment: {
        DEFAULT: '#6272A4',
        50: '#F0F2F6',
        100: '#E3E6EF',
        200: '#C9CFE0',
        300: '#AFB8D1',
        400: '#96A0C2',
        500: '#7C89B3',
        600: '#6272A4',
        700: '#4C5982',
        800: '#37415F',
        900: '#22283B'
      },
      selection: {
        DEFAULT: '#44475A',
        50: '#CECFDA',
        100: '#C2C4D1',
        200: '#ABAEBF',
        300: '#9397AE',
        400: '#7C819C',
        500: '#676C88',
        600: '#565971',
        700: '#44475A',
        800: '#2C2E3A',
        900: '#14151A'
      },
      foreground: {
        DEFAULT: '#F8F8F2',
        50: '#F8F8F2',
        100: '#EEEEE0',
        200: '#DBDBBB',
        300: '#C7C797',
        400: '#B3B372',
        500: '#9A9A53',
        600: '#767640',
        700: '#51512C',
        800: '#2D2D18',
        900: '#090905'
      },
      cyan: {
        DEFAULT: '#8BE9FD',
        50: '#EFFCFF',
        100: '#DBF8FE',
        200: '#B3F1FE',
        300: '#8BE9FD',
        400: '#54DFFC',
        500: '#1DD4FB',
        600: '#04B6DC',
        700: '#0388A5',
        800: '#025B6E',
        900: '#012D36'
      },
      green: {
        DEFAULT: '#50FA7B',
        50: '#DBFEE4',
        100: '#C7FDD5',
        200: '#9FFCB7',
        300: '#78FB99',
        400: '#50FA7B',
        500: '#19F852',
        600: '#06D43A',
        700: '#049D2B',
        800: '#03671C',
        900: '#01300D'
      },
      orange: {
        DEFAULT: '#FFB86C',
        50: '#FFFDFB',
        100: '#FFF3E6',
        200: '#FFDFBE',
        300: '#FFCC95',
        400: '#FFB86C',
        500: '#FF9D34',
        600: '#FB8200',
        700: '#C36500',
        800: '#8B4800',
        900: '#522B00'
      },
      pink: {
        DEFAULT: '#FF79C6',
        50: '#FFDFF1',
        100: '#FFCBE9',
        200: '#FFA2D7',
        300: '#FF79C6',
        400: '#FF41AE',
        500: '#FF0996',
        600: '#D00077',
        700: '#980057',
        800: '#600037',
        900: '#270017'
      },
      purple: {
        DEFAULT: '#BD93F9',
        50: '#F8F4FE',
        100: '#ECE0FD',
        200: '#D5BAFB',
        300: '#BD93F9',
        400: '#9D5EF6',
        500: '#7C29F3',
        600: '#600CD8',
        700: '#4809A3',
        800: '#31066D',
        900: '#190338'
      },
      red: {
        DEFAULT: '#FF5555',
        50: '#FFE4E4',
        100: '#FFCFCF',
        200: '#FFA7A7',
        300: '#FF7E7E',
        400: '#FF5555',
        500: '#FF1D1D',
        600: '#E40000',
        700: '#AC0000',
        800: '#740000',
        900: '#3B0000'
      },
      yellow: {
        DEFAULT: '#F1FA8C',
        50: '#FDFEEE',
        100: '#FBFDDA',
        200: '#F6FCB3',
        300: '#F1FA8C',
        400: '#EAF856',
        500: '#E4F520',
        600: '#C4D409',
        700: '#929F07',
        800: '#616905',
        900: '#2F3302'
      }
    }
  },
  plugins: [formsPlugin]
}
