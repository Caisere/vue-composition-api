<script setup>
    import Header from './components/Header.vue';
</script>

<template>
    <div class="app-layout">
        <Header />
        <main>
            <router-view></router-view>
        </main>
    </div>

</template>



<style scoped>
    .app-layout {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 100vh;
    }

    header {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        padding: 1rem;
        /* width: 100%; */
        /* background-color: #42b983; */
    }
</style>
