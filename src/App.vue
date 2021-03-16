<template>
  <div id="app">
    <leftMenu/>
    <div class="content">
      <Header/>
      <simplebar class="contentViewBar" data-simplebar-auto-hide="true">
        <router-view class="contentView"/>
      </simplebar>
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
import Header from '@/components/header.vue'
import leftMenu from '@/components/leftMenu.vue'

export default {
  components: {simplebar,Header,leftMenu}
}
</script>