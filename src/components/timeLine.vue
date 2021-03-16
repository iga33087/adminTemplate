<template>
  <div class="timeLine">
    <div class="timeLineBox">
      <template v-for="(item,index) in dayList">
        <el-tooltip class="item" effect="dark" :content="item" placement="top" :key="index">
          <div class="timeLineBoxItem" :style="{'width':'calc(100% / '+dayList.length+')'}" :class="{'timeLineBoxItemOn':checkIndex(item)}"></div>
        </el-tooltip>
      </template>
    </div>
    <div class="timeLineLabel">
      <div class="timeLineLabelItem">{{dayList[0]}}</div>
      <div class="timeLineLabelItem">{{dayList[dayList.length-1]}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ["now","afterDays","beforeDays","data"],
  computed: {
    dayList() {
      let arr=[]
      for(let i=this.beforeDays;i>=1;i--) {
        arr.push(moment(this.now).add(-i,'days').format('YYYY/MM/DD'))
      }
      arr.push(moment(this.now).format('YYYY/MM/DD'))
      for(let i=1;i<=this.afterDays;i++) {
        arr.push(moment(this.now).add(i,'days').format('YYYY/MM/DD'))
      }
      return arr
    }
  },
  created() {
    console.log(this.dayList)
  },
  methods: {
    checkIndex(x) {
      let index=this.data.indexOf(x)
      if(index===-1) return false
      else return true
    }
  }
}
</script>