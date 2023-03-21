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
      <v-col
        v-for="post in searchedPosts" :key="post.id"
        cols="6"
        sm="4"
        md="3"
        >
        <v-card width="250px">
          <v-avatar tile size="250">
            <v-img
              max-heigth="350"
              :src="post.imgLink"
              @click="goToShowPage(post.id)"
            >
            </v-img>
          </v-avatar>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ImagesSearch',
  props: {
    posts: Array
  },
  data() {
    return {
      tagName: ''
    }
  },
  methods: {
    goToShowPage(id) {
      this.$router.push(`/show/${id}`);
    }
  },
  computed: {
    searchedPosts() {
      return this.posts.filter((post) => post.imgTags.includes(this.tagName));
    }
  }
}
</script>

<style>

</style>