<template>
    <header>
        <router-link to="/">
            <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="50" height="50" />
        </router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>