<template>
  <div class="imgIndex">
    <p>ImagesIndex</p>
      <v-row>
        <v-col
          v-for="post in posts" :key="post.id"
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
      </v-row>
  </div>
</template>

<script>

export default {
  name: 'ImagesIndex',
  props: {
    posts: Array
  },
  data() {
    return {
    }
  },
  methods: {
    goToShowPage(id) {
      this.$router.push(`/show/${id}`);
    },
    toggleFavorite(id) {
      this.$emit('toggle-favorite', id);
    }
  }
}
</script>

<style scoped lang="scss">
.isFavorite {
  color: #FF66CC !important;
}

</style>