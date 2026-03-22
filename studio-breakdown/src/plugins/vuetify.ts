import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#0b1020',
          surface: '#121933',
          'surface-variant': '#182142',
          primary: '#7aa2ff',
          secondary: '#a78bfa',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
          info: '#38bdf8',
        },
      },
    },
  },
  defaults: {
    VCard: {
      rounded: 'lg',
      elevation: 4,
    },
    VChip: {
      rounded: 'pill',
      size: 'small',
    },
  },
})
