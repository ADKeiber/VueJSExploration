<script setup>
  import {ref} from 'vue'
  import LoginModal from './components/LoginModal.vue'
  import ExpenseDashboard from './components/ExpenseDashboard.vue'

  const loggedIn = ref(false)

</script>

<template>
  <div id="background">
    <div class="w-full h-1/6 flex flex-col justify-center">
      <h1 class="header font-bold text-7xl text-center">Expense Tracker</h1>
    </div>
    <div class="flex flex-col justify-center items-center h-5/6">
      <LoginModal v-if="!loggedIn"></LoginModal>
      <ExpenseDashboard v-else></ExpenseDashboard>
    </div>
    
  </div>
</template>

<style scoped>
</style>
