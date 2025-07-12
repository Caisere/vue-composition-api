<template>
    <div>
        <h1>This is the products</h1>
        <p>List of Products</p>
        <h3>{{ listOfProduct }}</h3>
        <button @click="increaseProduct">Increase Product</button>

        <br />

        <ul>
        <!-- <li>One</li> -->
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
        </ul>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

    const listOfProduct = ref(0)

    function increaseProduct() {
        return listOfProduct.value++
    }

    const products = ref([])

    async function getProducts() {
        const data = await axios.get('https://react-fast-pizza-api.jonas.io/api/menu')
        // console.log(data.data.data)
        products.value = data.data.data
    }

    // Call getProducts when component mounts
    getProducts()
</script>
