<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ToDoList from './components/ToDoList.vue';
import ToDoListTailwind from './components/ToDoListTailwind.vue';
</script>

<template>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a> -->
    <!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <ToDoList />
  <!-- <ToDoListTailwind /> -->
</template>

<style scoped>
div{
  position: sticky;
  top: 0;
  background-color: #fff;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
