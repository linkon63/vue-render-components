<script setup>
import { ref } from 'vue'
import BaseInput from './components/base_input/BaseInput.ts'
const value = ref('')
const value1 = ref('')

const changes = (e) => {
  console.log('value changes from parent : ', e.target.value)
}
</script>

<template>
  <h1>Vue Render Component</h1>
  <div class="flex border w-full">
    <BaseInput
      placeholder="Enter your email"
      :modelValue="value"
      label="Your Email"
      @onUpdate="changes"
      class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
    />
    <!-- @onUpdate="changes" -->
    <BaseInput
      placeholder="Enter your password"
      :modelValue="value1"
      label="Your Password"
      class="border bg-red-900"
    />
  </div>
</template>
