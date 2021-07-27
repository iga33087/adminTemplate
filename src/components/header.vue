<template>
  <div class="header">
    <div class="headerBox">
      <div class="headerBoxTitle">ADMIN TEMPLATE</div>
      <div class="headerBoxInfo">
        <el-switch style="display: block" v-model="$store.state.bgMode" active-value="bgMode2" inactive-value="bgMode1" @change="$store.commit('bgMode',$event)">
        </el-switch>
        <div class="headerBoxInfoItem">YU</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>