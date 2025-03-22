<script setup>
  import LoginModal from './components/LoginModal.vue'
  import ExpenseDashboard from './components/ExpenseDashboard.vue'
  const loggedIn = ref(false)

</script>

<template>
  <h1 class="text-3xl font-bold underline">HELLO WORLD!</h1>
  
  <LoginModal v-if="loggedIn"></LoginModal>
  <ExpenseDashboard v-else></ExpenseDashboard>
</template>

<style scoped>
</style>
