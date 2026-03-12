<script setup>
const postStore = usePostStore();

await postStore.getPost(useRoute());
</script>

<template>
    <div>
        <NuxtLink :to="{ name: 'posts' }">BACK</NuxtLink>
    </div>
    <div class="create">
        <div class="create__wrapper">
            <div class="create__input">
                <input
                    v-model="postStore.post.title"
                    class="create__input-title"
                    type="text"
                    placeholder="title"
                />
            </div>
            <div class="create__textarea">
                <textarea
                    v-model="postStore.post.content"
                    class="create__textarea-content"
                    placeholder="content"
                />
            </div>
            <a
                @click.prevent="postStore.updatePost(useRouter())"
                href="#"
                >UPDATE</a
            >
        </div>
    </div>
</template>

<style scoped></style>
