<script setup lang="ts">
  import {ref} from 'vue'
  import {JWT} from '../objects/JWT';
  
  const username = ref("")
  const password = ref("")
  const props = defineProps(["jwtToken"]);
  const emit = defineEmits(["get-jwt"]);

  const login = () => {
    console.log("Username: " + username.value + " password: " + password.value)
    //TODO: connect to url to retreive JWT
    if(username.value == "username" && password.value == "password"){
      emit("get-jwt",  new JWT()) //update to get an actual JWT from an authentication service
    }
  }
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-lg w-1/3 h-4/6 flex justify-around items-center flex-col">

    <div class="flex justify-between items-center mb-4 h-1/6">
      <h2 class="text-4xl font-semibold">Login</h2>
    </div>
    
    <form class="w-full max-w-100 h-4/6">
      <div class="mb-6 text-xl">
        <label class="block text-gray-700">Username</label>
        <input type="username" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter Username" v-model="username">
      </div>

      <div class="mb-6 text-xl">
        <label class="block text-gray-700">Password</label>
        <input type="password" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="Enter password" v-model="password">
      </div>

      <button type="submit" class="w-full bg-slate-400 text-white py-2 rounded hover:bg-slate-500" @click="login">
        Login
      </button>
    </form>

  </div>
</template>

<style scoped>
export default {
  name: "LoginModal"
}
</style>
