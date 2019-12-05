import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#782435', 
        secondary: '#C41E3D', 
        accent: '#F04600', 
        success: '#FFBE0B',
        error: '#5BC0EB',
        info: '#E08979', 
      },
    },
  },
})