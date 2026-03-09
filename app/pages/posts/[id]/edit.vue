<script setup>
const route = useRoute();
const router = useRouter();

const { data: postData } = await useFetch(`http://localhost:3001/posts/${route.params.id}`);

async function updatePost() {
  try {
    await $fetch(`http://localhost:3001/posts/${route.params.id}`, {
      method: "PATCH",
      body: postData.value
    });
    router.push("/posts");
  } catch (error) {
    console.error("Ошибка обновления поста:", error);
  }
}
</script>

<template>
  <div>
    <NuxtLink :to="{ name: 'posts' }">BACK</NuxtLink>
  </div>
  <div class="create">
    <div class="create__wrapper">
      <div class="create__input">
        <input
          v-model="postData.title"
          class="create__input-title"
          type="text"
          placeholder="title"
        />
      </div>
      <div class="create__textarea">
        <textarea
          v-model="postData.content"
          class="create__textarea-content"
          placeholder="content"
        />
      </div>
      <a @click.prevent="updatePost" href="#">UPDATE</a>
    </div>
  </div>
</template>

<style scoped>

</style>