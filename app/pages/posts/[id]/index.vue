<script setup>
const postStore = usePostStore()

await postStore.getPost(useRoute())

</script>

<template>
  <div class="posts">
	<NuxtLink :to="{name: 'posts'}">BACK</NuxtLink>
    <div class="posts__wrapper">
      <h3 class="posts__title">
        {{ postStore.post.title }}
      </h3>
      <p class="posts__content">{{ postStore.post.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.posts {
  margin: 50px auto;
  width: 50%;
  padding: 10px;
}
.posts__wrapper {
  background-color: white;
  width: 100%;
  padding: 20px 15px;
  border: 1px solid rgba(128, 128, 128, 0.2);
}

.posts__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
.posts__content {
  margin-bottom: 5px;
}
</style>
