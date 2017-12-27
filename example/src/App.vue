<template>
  <v-app>
    <v-form-generator/>
  </v-app>
</template>

<script>
  export default {
    components: {
      'v-form-generator': require('vuetify-form-generator').default
    },
    data () {
      return {
        model: {},
        schema: {},
        options: {}
      }
    }
  }
</script>
