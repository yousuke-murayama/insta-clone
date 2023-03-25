<template>
  <v-col
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
      <v-card-actions>
        <v-btn icon @click="toggleFavorite(post.id)">
          <v-icon :class="{isFavorite: post.favorite}">mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ImageLists',
  props: {
    post: Object
  },
  methods: {
    toggleFavorite(id) {
      this.$emit('toggle-favorite', id);
    },
    goToShowPage(id) {
      this.$router.push(`/show/${id}`);
    }
  }
}
</script>

<style scoped lang="scss">
.isFavorite {
  color: #FF66CC !important;
}
</style>