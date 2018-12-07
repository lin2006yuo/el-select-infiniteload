<template>
  <Tree :data="folderTree" :render="renderFunc"></Tree>
</template>

<script type="text/ecmascript-6">
import { putFileInFolder, transferFolderToTree, expandSpecifiedFolder } from '@/lib/util'
import clonedeep from 'clonedeep'

export default {
  components: {},
  props: {
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    },
    folderDrop: Array,
    fileDrop: Array,
    beforeDelete: Function
  },
  mounted() {
    this.transferData()
  },
  watch: {
    folderList() {
      this.transferData()
    },
    fileList() {
      this.transferData()
    }
  },
  data() {
    return {
      folderTree: [],
      currentRenameId: '',
      curRenamingContent: '',
      renderFunc: (h, { root, node, data }) => {
        const dropList = data.type === 'folder' ? this.folderDrop : this.fileDrop
        const dropdownRender = dropList.map(item => {
          return (
            <dropdownItem name={item.name}>{ item.title }</dropdownItem>
          )
        })
        console.log(data)
        const isRenaming = this.currentRenameId === `${data.type === 'folder' ? 'folder' : 'file'}_${data.id}` 
        return (
          <div class="tree-item">
            {data.type === 'folder' ? <icon type="ios-folder"></icon> : ''}
            { 
                isRenaming
                ?  <span>
                    <i-input value={data.title} on-input={this.handleInput}></i-input>
                    <i-button size="small" type="text" on-click={this.saveRename.bind(this, data)}><icon type="md-checkmark"/></i-button>
                    <i-button size="small" type="text"><icon type="md-close"/></i-button>
                  </span>
                : <span>{data.title}</span>
            }
            {
              dropList && !isRenaming ? 
              <dropdown placement="right-start" on-on-click={this.handleDropdownClick.bind(this, data)}>
                <i-button size="small" type="text" class="tree-item-button">
                  <icon type="md-more" size={12}/>
                </i-button>
                <dropdownMenu slot="list">
                  { dropdownRender }
                </dropdownMenu>
              </dropdown> : ''
            }
          </div>
        )
      }
    }
  },
  methods: {
    transferData() {
      this.folderTree = transferFolderToTree(putFileInFolder(this.folderList, this.fileList))
    },
    isFolder(type) {
      return type === 'folder'
    },
    handleDelete(data) {
      const folderId = data.folder_id
      const isFolder = this.isFolder(data.type)
      let updateListName = isFolder ? 'folderList' : 'fileList'
      let list = isFolder ? clonedeep(this.folderList) : clonedeep(this.fileList)
      list = list.filter(item => item.id !== data.id)
      this.$emit(`update:${updateListName}`, list)
      this.$nextTick(() => {
        console.log('删除')
        expandSpecifiedFolder(this.folderTree, folderId)
      })
    },
    handleDropdownClick(data, name) {
      if(name === 'rename') {
        this.currentRenameId = `${data.type === 'folder' ? 'folder' : 'file'}_${data.id}`        
      } else if (name === 'delete') {
        this.$Modal.confirm({
          title: '提示',
          content: `您确定要删除${this.isFolder(data.type) ? '文件夹' : '文件'}《${data.title}》吗？`,
          onOk: () => {
            this.beforeDelete ? this.beforeDelete().then(() => {
              this.handleDelete(data)
            }).catch(err => {
              this.$Message.error('删除失败' + err)
            }) : this.handleDelete(data)
          }
        })
      }
    },
    handleInput(value) {
      this.curRenamingContent = value
    },
    updateList(list, id) {
      let i = -1
      let len = list.length
      while(++i < len) {
        let Item = list[i]
        if(Item.id === id) {
          Item.name = this.curRenamingContent
          list.splice(i, 1, Item)
          break
        }
      }
      return list
    },
    saveRename(data) {
      const id = data.id
      const type = data.type
      if(type === 'folder') {
        const list = this.updateList(clonedeep(this.folderList), id)
        this.$emit('update:folderList', list)
      } else {
        //如果是文件
        const list = this.updateList(clonedeep(this.fileList), id)
        this.$emit('update:fileList', list)
      }
      this.currentRenameId = ''
    }
  }
};
</script>

<style lang="stylus">
.tree-item {
  ul.ivu-dropdown-menu {
    padding-left: 0
  }
  li.ivu-dropdown-item {
    margin 0;
    padding: 7px 16px
  }
}
</style>
