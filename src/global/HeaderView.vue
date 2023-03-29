<template>
  <div class="header">
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title 
        class="header__title"
        @click="goToHome"
      >
        ImageApp
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="header__menu">
        <v-btn icon @click="goToHome">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        

        <v-btn icon @click="goToUploadPage">
          <v-icon>mdi-send-outline</v-icon>
        </v-btn>

        <v-btn icon @click="goToFavoritesPage">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon @click="goToSearchPage">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon @click="deleteAllPosts">
          <v-icon>mdi-delete-alert</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goToUploadPage() {
      this.$router.push('/upload').catch(() => {});
    },
    goToHome() {
      this.$router.push('/').catch(() => {});
    },
    goToFavoritesPage() {
      this.$router.push('/favorites').catch(() => {});
    },
    goToSearchPage() {
      this.$router.push('/search').catch(() => {});
    },
    deleteAllPosts() {
      this.$emit('delete-all-posts');
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 20px;

  &__title {
    cursor: pointer;
  }
}

</style>