<script setup>
  defineProps({
    isLoading: Boolean
  })
</script>


<template>
  <div v-if="isLoading">
    <h1>Loading....</h1>
  </div>
</template>
