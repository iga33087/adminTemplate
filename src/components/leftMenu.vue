<template>
  <div class="leftMenu">
    <div class="leftMenuBox">
      <leftMenuItem v-for="item in routerList" :key="item.path" :data="item"/>
    </div>
  </div>
</template>

<script>
import leftMenuItem from '@/components/leftMenuItem.vue'

export default {
  components: {leftMenuItem},
  data() {
    return {
      routerList: [
        {
          path: "/collections",
          name: "Collections",
          meta: {
            title:"情資集",
            loginRequired: true,
            adminRequired: true,
            show:true
          },
          children: [
            {
              path: "/vvv",
              name: "dddd",
              meta: {
                show:false,
                title:"vvvv",
              }
            },
            {
              path: "/fff",
              name: "ffb",
              meta: {
                show:false,
                title:"ffbbf",
              },
              children: [
                {
                  path: "/vvvddfg",
                  name: "dfhdfh",
                  meta: {
                    show:false,
                    title:"cxc",
                  },
                }
              ]
            },
          ]
        },
        {
          path: "/login",
          name: "Login",
          meta: {
            show:false,
            title:"登入",
          }
        },
        {
          path: "/users",
          name: "Users",
          meta: {
            title:"使用者",
            loginRequired: true,
            adminRequired: true,
            show:true
          }
        }
      ]
    }
  }
}
</script>