export const usePost = () => {
    const posts = useState('posts', () => [])
    const post = useState('post', () => {
        return  {
            id: '',
            title: '',
            content: '',
        }
    })

    const getPosts = async () => {
        const res = await useFetch("http://localhost:3001/posts");
        posts.value = res.data.value;
        return posts;
    };

    const getPost = async (route) => {
        const res = await useFetch(`http://localhost:3001/posts/${route.params.id}`);
        post.value = res.data.value
        return post
    };

    async function storePost(post, router) {
        try {
            await $fetch("http://localhost:3001/posts", {
                method: "POST",
                body: post,
            });
            router.push("/posts");
        } catch (e) {
            console.error("Ошибка сохранения:", e);
        }
    }

    async function updatePost(route) {
        try {
            await $fetch(`http://localhost:3001/posts/${route.params.id}`, {
                method: "PATCH",
                body: post.value,
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
            posts.value = posts.value.filter(i => i !== post)
        } catch (error) {
            console.error("Ошибка удаления поста:", error);
        }
    }

    return {deletePost, updatePost, storePost, getPost, getPosts };
};
