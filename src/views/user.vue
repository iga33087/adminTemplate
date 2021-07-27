<template>
  <div class="user">
    <el-row :gutter="20">
      <el-col :lg="12">
        <box title="TITLE">
          <tableList/>
        </box>
      </el-col>
      <el-col :lg="12">
        <box title="TITLE">
          <tableList/>
        </box>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import box from '@/components/box.vue'
import tableList from '@/components/tableList.vue'

export default {
  components: {box,tableList}
}
</script>