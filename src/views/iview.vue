<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed"> 
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses"  @click="handleCollapsed" type="md-menu" :size="32"/>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view></router-view>            
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script type="text/ecmascript-6">
import SideMenu from '@/components/side-menu'

export default {
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: true,
      menuList: [
        {
          title: '11111',
          name: 'menu1',
          icon: 'ios-alarm'
        },
        {
          title: '22222',
          name: 'menu2',
          icon: 'ios-alarm'
        },
        {
          title: '33333',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            {
              title: '3-11111',
              name: 'menu3-1',
              icon: 'ios-alarm',
            },
            {
              title: '3-22222',
              name: 'menu3-2',
              icon: 'ios-alarm',
              children: [
                {
                  title: '3-2-11111',
                  name: 'menu3-2-1',
                  icon: 'ios-alarm',
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses() {
      return [
        'trigger-icon',
        this.collapsed ? '' : 'rotate'
      ]
    }
  },
  mounted() {
    console.log({route: this.$route, router: this.$router})
  },
  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="stylus">
.layout-wrapper {
  height 600px
  .layout-outer {
    height 100%
  }
  .header-wrapper {
    background-color #fff
    border 1px solid #eee
    padding 0 10px
    .trigger-icon {
      cursor pointer
      &.rotate {
        transform rotate(90deg)
        transition transform .3s ease
      }
    }
  }
  .content-con {
    padding 10px
  }
  .page-card {
    min-height calc(100vh - 300px)
  }
}

</style>
