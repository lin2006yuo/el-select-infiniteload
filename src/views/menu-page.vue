<template>
  <div class="menu-box">
      <p>递归菜单</p>
      <!-- <a-menu>
        <menu-item>11</menu-item>
        <menu-item>22</menu-item>
        <sub-menu>
          <div slot="title">333</div>
          <menu-item>33-1</menu-item>
          <sub-menu>
            <div slot="title">33-2</div>
            <menu-item>33-2-1</menu-item>
            <menu-item>33-2-2</menu-item>
          </sub-menu>s
        </sub-menu>
      </a-menu> -->
      <a-menu>
        <template v-for="(item, index) in list">
          <menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</menu-item>
          <re-submenu  v-else :key="`menu-item_${index}`" :parent="item" :index="index"></re-submenu>
        </template>
      </a-menu>
  </div>
</template>

<script type="text/ecmascript-6">
import menuComponents from '@/components/menu'
import ReSubmenu from '@/views/re-submenu'

export default {
  components: {
    ...menuComponents,
    ReSubmenu
  },
  data() {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '222'
        },
        {
          title: '333',
          children: [
            {
              title: '333-1'
            },
            {
              title: '333-2',
              children: [
                {
                  title: '333-2-1'
                },
                {
                  title: '333-2-2'
                }
              ]
            }
          ]
        },
      ]
    };
  }
};
</script>

<style lang="stylus">
.menu-box {
  width 300px
  height 300px
}
</style>
