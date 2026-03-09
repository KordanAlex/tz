<script setup>
const { data: postsData, refresh: refreshPosts, pending: pendingPosts } = await useLazyFetch("http://localhost:3001/posts");

async function deletePost(post) {
  try {
     await $fetch(`http://localhost:3001/posts/${post.id}`, {
      method: "DELETE",
    });
    await refreshPosts()
    
  } catch (error) {
    console.error("Ошибка удаления поста:", error);
  }
}
</script>

<template>
  <div class="posts">
    <NuxtLink :to="{ name: 'posts-create' }">CREATE</NuxtLink>
    <div v-if="pendingPosts" class="pending">
        Loading......
    </div>
    <div class="posts__wrapper">
      <div v-for="post in postsData" class="posts__post">
        <h3 class="posts__title">
          <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">{{
            post.title
          }}</NuxtLink>
        </h3>
        <p class="posts__content">{{ post.content }}</p>
        <div class="post__active">
          <NuxtLink :to="{ name: 'posts-id-edit', params: { id: post.id } }"
            >Edit</NuxtLink
          >
          <button @click="deletePost(post)" type="button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post__active {
  display: flex;
  gap: 10px;
}
.posts {
  margin: 50px auto;
  width: 50%;
  padding: 10px;
}
.posts__post {
  background-color: white;
  width: 100%;
  padding: 20px 15px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  margin-bottom: 15px;
}

.posts__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.posts__title a {
  color: black;
}
.posts__content {
  margin-bottom: 25px;
}
</style>