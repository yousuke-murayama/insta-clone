<template>
  <div>
    <p>SearchImages</p>
    <v-col cols="12" sm="9" offset-sm="1">
      <v-row>
        <v-text-field 
          label="タグで検索"
          v-model="tagName">
          <v-icon slot="prepend">
            mdi-magnify
          </v-icon>
        </v-text-field> 
      </v-row>
    </v-col>
    
    <v-row>
      <ImageLists
        v-for="post in searchedPosts" 
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
  name: 'ImagesSearch',
  components: {
    ImageLists
  },
  props: {
    posts: Array
  },
  data() {
    return {
      tagName: ''
    }
  },
  methods: {
    toggleFavorite(e) {
      this.$emit('toggle-favorite', e);
    }
  },
  computed: {
    searchedPosts() {
      return this.posts.filter((post) => post.imgTags.includes(this.tagName));
    }
  }
}
</script>

<style scoped lang="scss">
.isFavorite {
  color: #FF66CC !important;
}
</style>