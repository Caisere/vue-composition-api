<script setup>
    import { computed, reactive, ref } from 'vue';
    import UserComponent from '@/components/UserComponent.vue';
    
    const OddorEven = computed(() => {
        if(countObj.count % 2 === 0) return 'Even'
        return 'Odd'
    })

    const myRef = ref(2)
    console.log(myRef)

    const countObj = reactive({
        count: 0
    })

    function passingRef () {
        return `I am ${myRef.value} age`
    }

    console.log(passingRef())

    // const incrementCount = () => {
    //     return countObj.count++
    // }

    // const decrementCountOnDC = () => {
    //     return countObj.count--
    // }

    const incrementCountBy2 = () => {
        return countObj.count += 2
    }

    const incrementCountBy3 = () => {
        return countObj.count += 3
    }

    const selectevent = computed(() => {
        if(OddorEven.value === 'Even') return 'click'
        return null
    })

    const inc = computed(() => {
        if(OddorEven.value === 'Even') return incrementCountBy2
        else if (OddorEven.value === 'Odd') return incrementCountBy3
        return null
    })
</script>


<template>
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <UserComponent/>
        <button @:click='countObj.count++'>{{ countObj.count }}</button>
        <button @[selectevent]="inc">Increment count by 2 or 3</button>
        <button @:click="myRef++">increase myRef {{ myRef }}</button>
        <h1>The count value is {{ OddorEven }}</h1>
        <router-link to="/about">Go to About Page</router-link>
    </div>
</template>
