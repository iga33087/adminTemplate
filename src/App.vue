<template>
  <div id="app">
    <leftMenu/>
    <div class="content">
      <Header/>
      <router-view class="contentView"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import leftMenu from '@/components/leftMenu.vue'
export default {
  components: {Header,leftMenu}
}
</script>