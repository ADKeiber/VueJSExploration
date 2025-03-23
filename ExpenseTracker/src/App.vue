<script setup>
  import {ref} from 'vue'
  import LoginModal from './components/LoginModal.vue'
  import ExpenseDashboard from './components/ExpenseDashboard.vue'

  const loggedIn = ref(false)

</script>

<template>
  <div id="background">
    <h1 class="text-3xl font-bold underline">Expense Tracker</h1>
  
    <LoginModal v-if="loggedIn"></LoginModal>
    <ExpenseDashboard v-else></ExpenseDashboard>
  </div>
</template>

<style scoped>
</style>
