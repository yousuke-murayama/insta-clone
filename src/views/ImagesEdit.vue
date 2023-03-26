<template>
  <div>
    <p>ImagesEdit: {{ this.id }}</p>

    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <ul class="tagLists">
          <li v-for="tag in posts[this.id].imgTags" :key="tag">
            {{ `#${tag}` }}
          </li>
        </ul>
        <v-row>
          <v-text-field
            v-model="tag"
            label="タグ"
          ></v-text-field>
          
          <!-- addTagメソッドを後で追加 -->
          <v-btn
            :disabled="!tag"
            color="primary"
            class="addBtn" 
          >
            タグを追加
          </v-btn>

          <!-- deleteTagsメソッドを後で追加 -->
          <v-btn
            color="red"
            dark
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

        <!-- saveEditionメソッドは未定義 -->
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

.addBtn {
  margin-right: 5px;
}

</style>