<script setup>
  import { computed, reactive, ref } from 'vue';
  import UserComponent from '@/components/UserComponent.vue';
  import LoadingComponent from '@/components/LoadingComponent.vue';

  const OddorEven = computed(() => {
    if(countObj.count % 2 === 0) return 'Even'
    return 'Odd'
  })

  const myRef = ref(2)

  const isActive = ref(true)

  function toggleIsActive() {
    return isActive.value = !isActive.value
  }

  const loading = ref(false)

  setTimeout(() => {
    return loading.value = !loading.value
  }, 5000)


const countObj = reactive({
    count: 0
})

  // function passingRef () {
  //     return `I am ${myRef.value} age`
  // }


  const now = computed(() => Date.now())

  console.log(now.value)

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


  const isVisible = ref(false);
</script>


<template>
    <div>
        <h1>Home Page</h1>
        <button @click="toggleIsActive" :class="{active: isActive}" class="welcomeBtn">Welcome to the home page!</button>
        <LoadingComponent :isLoading="loading"/>
        <UserComponent/>
        <button @:click='countObj.count++'>{{ countObj.count }}</button>
        <button @[selectevent]="inc">Increment count by 2 or 3</button>
        <button @:click="myRef++">increase myRef {{ myRef }}</button>
        <h1>The count value is {{ OddorEven }}</h1>

        <h1 v-if="isActive">Vue is Awesome</h1>
        <p v-else>Oh, No!</p>



        <button @click="isVisible = !isVisible">
          Toggle panel
        </button>

        <div v-show="isVisible" class="panel">
          I stay in the DOM – only my `display` property changes.
        </div>
        <router-link to="/about">Go to About Page</router-link>
    </div>
</template>

<style scoped>
  .welcomeBtn {
    border: none;
    padding: 0.4rem 0.8rem;
  }
  .active {
      background-color: deepskyblue;
      color:antiquewhite;
  }
</style>
