<template>
  <v-layout>
    <h3>Bienvenido {{ user.name }} </h3>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState(['user'])
  }
}
</script>
