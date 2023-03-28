<template>
  <div>
    <p>ImagesEdit: {{ this.id }}</p>

    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <ul class="tagLists">
          <li 
            v-for="(tag, index) in posts[this.id].imgTags" 
            :key="index"
          >
            {{ `#${tag}` }}
          </li>
        </ul>
        <v-row>
          <v-text-field
            v-model="tag"
            label="タグ"
          ></v-text-field>
          
          <v-btn
            :disabled="!tag"
            color="primary"
            class="addTagBtn"
            @click="addTag" 
          >
            タグを追加
          </v-btn>

          <v-btn
            color="red"
            dark
            @click="deleteTags"
          >
            <v-icon left>mdi-delete</v-icon>タグを削除
          </v-btn>
        </v-row>

        <v-img 
          :src="posts[this.id].imgLink"
          height="450px"
        >
        </v-img>

        <v-textarea
          outlined
          name="input-7-4"
          class="commentSpace"
          label="コメント"
          v-model="post.comment"
        ></v-textarea>

        <v-btn 
          block 
          color="success"
          :disabled="!post.comment"
          @click="saveEdition"
        >
          編集を保存する
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'ImagesEdit',
  props: {
    posts: Array
  },
  data() {
    return {
      id: this.$route.params.id,
      post: this.posts[this.$route.params.id],
      tag: ''
    }
  },
  methods: {
    addTag() {
      if(this.post.imgTags.length >= 5) {
        alert('一つの投稿につき、タグは5個までです。');
        this.tag = '';
      } else {
        this.$emit('add-tag', {
          id: this.id,
          tag: this.tag
        });
        this.tag = '';
      }
    },
    deleteTags() {
      this.$emit('delete-tags', this.id);
    },
    saveEdition() {
      this.$emit('save-edition', {
        id: this.id,
        comment: this.post.comment
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    if(to.path === `/show/${this.id}`) {
      next();
    } else {
      const answer = window.confirm('編集中のものは保存されませんが、よろしいですか？');
      if(answer) {
          next();
          window.location.reload();
        } else {
          next(`/edit/${this.id}`);
      } 
    }
  }  
}
</script>

<style scoped lang="scss">
.tagLists {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  & li {
    margin-right: 10px;
  }
}
.commentSpace {
  margin-top: 10px;
}

.addTagBtn {
  margin-right: 5px;
}

</style>