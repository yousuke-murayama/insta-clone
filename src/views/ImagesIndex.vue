<template>
  <div class="imgIndex">
    <p>ImagesIndex</p>
      <v-row>
        <ImageLists 
          v-for="post in posts" 
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
  name: 'ImagesIndex',
  components: {
    ImageLists
  },
  props: {
    posts: Array
  },
  data() {
    return {
    }
  },
  methods: {
    toggleFavorite(e) {
      this.$emit('toggle-favorite', e);
    }
  }
}
</script>

<style scoped lang="scss">

</style>