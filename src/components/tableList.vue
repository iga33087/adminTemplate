<template>
  <div class="tableList">
    <div class="tableListBox">
      <div class="tableListBoxHeader">
        <div class="tableListBoxHeaderItem" style="width:calc(100% / 4)">Name</div>
        <div class="tableListBoxHeaderItem" style="width:calc(100% / 4)">AGE</div>
        <div class="tableListBoxHeaderItem" style="width:calc(100% / 4)">DETAIL</div>
        <div class="tableListBoxHeaderItem" style="width:calc(100% / 4)">MORE</div>
      </div>
      <div class="tableListBoxList" v-for="(item,index) in 50" :key="index">
        <div class="tableListBoxListItem" style="width:calc(100% / 4)">Json</div>
        <div class="tableListBoxListItem" style="width:calc(100% / 4)">18</div>
        <div class="tableListBoxListItem" style="width:calc(100% / 4)">This is the detail</div>
        <div class="tableListBoxListItem" style="width:calc(100% / 4)">more</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>