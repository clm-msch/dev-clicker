<template>
  <div>
    EXP :{{ expData.count }}
  </div>
</template>

<script setup>
  import { inject } from 'vue'

  const expData = inject('expData')
</script>

<style scoped>
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>