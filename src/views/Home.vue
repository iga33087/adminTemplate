<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :lg="8">
        <box title="TITLE">123</box>
      </el-col>
      <el-col :lg="16">
        <box title="MAP">
          <leafMap/>
        </box>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="8">
        <box title="TITLE"/>
      </el-col>
      <el-col :lg="8">
        <box/>
      </el-col>
      <el-col :lg="8">
        <box/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import box from '@/components/box.vue'
import leafMap from '@/components/leafMap.vue'

export default {
  name: 'Home',
  components: {box,leafMap}
}
</script>
