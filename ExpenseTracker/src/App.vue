<script setup lang="ts">
  import {ref} from 'vue'
  import LoginModal from './components/LoginModal.vue'
  import ExpenseDashboard from './components/ExpenseDashboard.vue'

  const jwt = ref(null)
  const validJWT = ref(false)
  
  const getJWT = (data) => {
    console.log(data)
    jwt.value = data
    if(jwt != null){
      validJWT.value = true // need to validate 
    }
  }
</script>

<template>
  <div id="background">
    <div class="w-full h-1/6 flex flex-col justify-center">
      <h1 class="header font-bold text-7xl text-center">Expense Tracker</h1>
    </div>
    <div class="flex flex-col justify-center items-center h-5/6">
      <LoginModal v-if="!validJWT" @get-jwt="getJWT"></LoginModal>
      <ExpenseDashboard v-else></ExpenseDashboard>
    </div>
    
  </div>
</template>

<style scoped>
</style>
