export const usePostStore = defineStore("postStore", () => {
    const posts = ref([]);
    const post = reactive({
        id: "",
        title: "",
        content: "",
    });
    const getPosts = async () => {
        const res = await useFetch("http://localhost:3001/posts");
        posts.value = res.data.value;
    };

    const getPost = async (route) => {
        const res = await useFetch(
            `http://localhost:3001/posts/${route.params.id}`,
        );
        Object.assign(post, res.data.value)
    };

    async function storePost(post, router) {
        try {
            await $fetch("http://localhost:3001/posts", {
                method: "POST",
                body: post,
            });
            Object.assign(post, {
                title: '',
                content: '',
            })
            router.push("/posts");
        } catch (e) {
            console.error("Ошибка сохранения:", e);
        }
    }

    async function updatePost(router) {
        try {
            await $fetch(`http://localhost:3001/posts/${post.id}`, {
                method: "PATCH",
                body: post,
            });
            router.push("/posts");
        } catch (error) {
            console.error("Ошибка обновления поста:", error);
        }
    }

    async function deletePost(post) {
        try {
            await $fetch(`http://localhost:3001/posts/${post.id}`, {
                method: "DELETE",
            });
            posts.value = posts.value.filter((i) => i !== post);
        } catch (error) {
            console.error("Ошибка удаления поста:", error);
        }
    }

    return {
        post,
        posts,
        deletePost,
        updatePost,
        storePost,
        getPost,
        getPosts,
    };
});
