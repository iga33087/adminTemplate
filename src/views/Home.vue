<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :lg="8">
        <box title="TITLE">
          <randomChart/>
        </box>
      </el-col>
      <el-col :lg="16">
        <box title="MAP">
          <leafMap/>
        </box>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="8">
        <box title="CHART 1"/>
      </el-col>
      <el-col :lg="8">
        <box title="CHART 2"/>
      </el-col>
      <el-col :lg="8">
        <box title="CHART 3"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import box from '@/components/box.vue'
import leafMap from '@/components/leafMap.vue'
import randomChart from '@/components/RandomChart.vue'

export default {
  name: 'Home',
  components: {box,leafMap,randomChart}
}
</script>
