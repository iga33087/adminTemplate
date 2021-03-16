<template>
  <div class="box">
    <div class="boxTitle">{{title}}</div>
    <div class="boxContent">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>