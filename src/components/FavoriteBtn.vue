<template>
  <v-btn icon @click="toggleFavorite">
    <v-icon 
      :class="{isFavorite: posts[this.$route.params.id].favorite}"
    >
      mdi-heart
    </v-icon>
  </v-btn>
</template>

<script>

export default {
  name: 'FavoriteBtn',
  props: {
    posts: Array
  },
  data() {
    return {
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite');
    }
  }
}
</script>

<style scoped lang="scss">
.isFavorite {
  color: #FF66CC !important;
}
</style>