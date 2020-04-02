<template>
    <div>
        <router-view/>
        <nav-bar/>
    </div>
</template>

<script>
    import NavBar from "./NavBar";

    export default {
        name: "AppMovies",
        components: {
            NavBar
        },
        methods: {
            beforeRouteEnter(to, form, next) {
                next(vm => vm.getMovies());
            }

        },
    }
</script>

<style scoped>

</style>