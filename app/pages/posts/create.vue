<script setup>
const postStore = usePostStore();

const post = reactive({
    title: "",
    content: "",
});
</script>

<template>
    <div>
        <NuxtLink :to="{ name: 'posts' }">BACK</NuxtLink>
    </div>
    <div class="create">
        <div class="create__wrapper">
            <div class="create__input">
                <input
                    v-model="post.title"
                    class="create__input-title"
                    type="text"
                    placeholder="title"
                />
            </div>
            <div class="create__textarea">
                <textarea
                    v-model="post.content"
                    class="create__textarea-content"
                    placeholder="content"
                />
            </div>
            <a @click.prevent="postStore.storePost(post,useRouter())" href="#"
                >STORE</a
            >
        </div>
    </div>
</template>

<style>
.create {
    width: 100%;
    margin: 50px auto;
    display: flex;
    justify-content: center;
}
.create__wrapper {
    width: 50%;
}
.create__input input {
    width: 100%;
}
.create__textarea textarea {
    width: 100%;
}
</style>
