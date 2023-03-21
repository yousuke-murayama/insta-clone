<template>
  <div>
    <p>Favorites</p>
    <v-row>
      <v-col
        v-for="post in favoritePosts" :key="post.id"
        cols="6"
        sm="4"
        md="3"
        >
        <v-card width="250px" v-show="post.favorite">
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
  name: 'ImagesFavorites',
  props: {
    posts: Array
  },
  methods: {
    goToShowPage(id) {
      this.$router.push(`/show/${id}`);
    }
  },
  computed: {
    favoritePosts() {
      return this.posts.filter((post) => post.favorite === true);
    }
  }
}
</script>

<style>

</style>