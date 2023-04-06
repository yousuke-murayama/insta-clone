<template>
  <div>
    <p>SearchImages</p>
    <v-col cols="12" sm="9" offset-sm="1">
      <v-row v-if="!isShow">
        <v-text-field 
          label="タグで検索"
          v-model="tagName"
        >
          <v-icon slot="prepend">
            mdi-magnify
          </v-icon>
        </v-text-field>
        <v-btn @click="isShow = !isShow">撮影日で検索</v-btn>
      </v-row>

      <v-row v-else>
        <v-text-field 
          label="撮影日で検索"
          v-model="date"
        >
          <v-icon slot="prepend">
            mdi-magnify
          </v-icon>
        </v-text-field>
        <v-btn @click="isShow = !isShow">タグ名で検索</v-btn>
      </v-row>
    </v-col>

    <v-row v-if="searchedPosts.length !== 0">
      <ImageLists
        v-for="post in searchedPosts" 
        :key="post.id"
        :post="post"
        @toggle-favorite="toggleFavorite"
      />
    </v-row>

    <v-row v-if="searchedDatePosts.length !==0">
      <ImageLists
        v-for="post in searchedDatePosts" 
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
      tagName: '',
      date: '',
      isShow: false,
      menu: false
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
    },
    searchedDatePosts() {
      return this.posts.filter((post) => post.date === this.date);
    }
  }
}
</script>

<style scoped lang="scss">

</style>