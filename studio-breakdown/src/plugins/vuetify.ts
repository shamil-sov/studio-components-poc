import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#f5f7fa',
          surface: '#ffffff',
          'surface-variant': '#eef1f6',
          primary: '#4a76d4',
          secondary: '#7c5cbf',
          success: '#2a9d6e',
          warning: '#d4920a',
          error: '#d64545',
          info: '#2b8fcf',
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
