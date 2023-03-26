<template>
  <div>
    <p>Favorites</p>
    <v-row>
      <ImageLists
        v-for="post in favoritePosts" 
        :key="post.id"
        :post="post"
        @toggle-favorite="toggleFavorite"
      />
    </v-row>
  </div>
</template>

<script>
import ImageLists from '@/components/ImageLists.vue';

export default {
  name: 'ImagesFavorites',
  components: {
    ImageLists
  },
  props: {
    posts: Array
  },
  methods: {
    goToShowPage(id) {
      this.$router.push(`/show/${id}`);
    },
    toggleFavorite(e) {
      this.$emit('toggle-favorite', e);
    }
  },
  computed: {
    favoritePosts() {
      return this.posts.filter((post) => post.favorite === true);
    }
  }
}
</script>

<style scoped lang="scss">

</style>