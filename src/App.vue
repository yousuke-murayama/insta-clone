<template>
  <v-app>
    <HeaderView @delete-all-posts="deleteAllPosts"/>
    <v-main>
      <v-container>
        <router-view
          :posts="posts"
          @post-picture="postPicture"
          @toggle-favorite="toggleFavorite"
          @delete-post="deletePost"
          @add-tag="addTag"
          @delete-tags="deleteTags"
          @save-edition="saveEdition"
        />
      </v-container>
    </v-main>
    <FooterView/>
  </v-app>
</template>

<script>
import HeaderView from '@/global/HeaderView.vue'
import FooterView from '@/global/FooterView.vue'

const STORAGE_KEY = "Posts";
const isDeleted = '削除してもよろしいですか？';

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    postPicture(e) {
      this.posts.push({
        id: this.posts.length,
        img: e.img,
        imgLink: e.imgLink,
        date: e.date,
        comment: e.comment,
        imgTags: e.imgTags,
        favorite: false
      });
      this.savePosts();
    },
    toggleFavorite(e) {
      if(this.posts[e].favorite === true) {
        this.posts[e].favorite = false
      } else {
        this.posts[e].favorite = true
      }
      this.savePosts();
    },
    savePosts() {
      const parsed = JSON.stringify(this.posts);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    goToUploadPage() {
      this.$router.push('/upload');
    },
    deletePost(e) {
      if(window.confirm(isDeleted)) {
        this.posts.splice(e, 1);
        this.resetIds();
        this.savePosts();
        this.$router.push('/');
      }
    },
    deleteAllPosts() {
      if(this.posts.length !== 0) {
        const isAllDeleted = '全ての投稿を削除します。よろしいですか？';
        if(window.confirm(isAllDeleted)) {
          localStorage.setItem(STORAGE_KEY, '');
          localStorage.removeItem(STORAGE_KEY);
          this.posts = [];
          window.location.reload();
        }
      }
    },
    addTag(e) {
      this.posts[e.id].imgTags.push(e.tag);
    },
    deleteTags(e) {
      if(window.confirm(isDeleted)) {
        this.posts[e].imgTags = [];
      }
    },
    saveEdition(e) {
      this.posts[e.id].comment = e.comment;
      this.savePosts();
      this.$router.push(`/show/${e.id}`);
    },
    resetIds() {
      this.posts.forEach((post, index) => {
        post.id = index;
      });
    }
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.posts = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }
};
</script>
