<template>
  <div class="leftMenuItem">
    <div class="leftMenuItemBox">
      <div class="leftMenuItemBoxTitle">{{data.meta.title}}</div>
      <transition>
        <div class="leftMenuItemBoxChildren" v-if="data.children&&data.children.length">
          <leftMenuItem v-for="item in data.children" :key="item.path" :data="item"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import leftMenuItem from '@/components/leftMenuItem.vue'

export default {
  name: "leftMenuItem",
  props: ["data"],
  components: {leftMenuItem}
}
</script>