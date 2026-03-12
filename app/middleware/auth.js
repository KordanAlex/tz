export default defineNuxtRouteMiddleware((to, from) => {
    const isAuth = true
    console.log(22222222222);
    
    if (!isAuth && to.fullPath !== '/') {
        return navigateTo('/')
    }
    
})