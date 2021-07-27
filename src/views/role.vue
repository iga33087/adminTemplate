<template>
  <div class="role">
    <el-row :gutter="20">
      <el-col :md="8">
        <box title="角色">
          <el-button @click="addRole">新增</el-button>
          <div class="roleItem" :class="{'roleItemIsChange':item._id===chooseRole}" v-for="(item,index) in roleList" :key="index" @click="getRolePermissions(item._id)">{{item.name}}</div>
        </box>
      </el-col>
      <el-col :md="16">
        <box title="權限">
          <el-button @click="sub">儲存</el-button>
          <el-tree ref="tree" node-key="_id" :data="menuList" show-checkbox default-expand-all></el-tree>
        </box>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import box from '@/components/box.vue'

export default {
  components: {box},
  data() {
    return {
      chooseRole:"",
      roleList: [],
      menuList: []
    }
  },
  async created() {
    this.roleList=await this.$api.getRole()
    this.menuList=this.arrangeMenu(await this.$api.getMenu())
    console.log('arrangeMenu',this.menuList)
  },
  methods: {
    arrangeMenu(x) {
      let res=[]
      for(let item of x) {
        res.push(this.arrangeMenuLoop(x,item))
      }
      res=res.filter(res=>!res.pid)
      return res
    },
    arrangeMenuLoop(x,item) {
      let res=item
      res.label=res.title
      let children=x.filter(res=>res.pid===item['_id'])
      res.children=children
      return res
    },
    async getRolePermissions(x) {
      this.chooseRole=x
      let per=await this.$api.getPermissions({roleId:x})
      per.forEach(res => {
        res._id=res.menuId
      });
      this.$refs.tree.setCheckedNodes(per)
      console.log(await this.$api.getRouter({roleId:x}))
    },
    async sub() {
      let menuList=this.$refs.tree.getCheckedKeys()
      let obj={roleId:this.chooseRole,menuList}
      await this.$api.postPermissions(obj)
      await this.getRolePermissions(this.chooseRole)
    },
    async addRole() {
      let name=prompt("請輸入角色名稱");
      await this.$api.postRole({name:name})
      this.roleList=await this.$api.getRole()
    }
  }
}
</script>