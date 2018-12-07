<template>
  <div class="">
    <!-- <Tree :data="folderTree" :render="renderFunc"></Tree> -->
    <folder-tree 
      :folder-list.sync="folderList" 
      :file-list.sync="fileList"
      :folder-drop="folderDrop"
      :file-drop="fileDrop"
      :beforeDelete="beforeDelete"
    ></folder-tree>
  </div>
</template>

<script type="text/ecmascript-6">
import { getFolderList, getFileList } from '@/api/data'
import  FolderTree  from '@/components/folder-tree'

export default {
  components: {
    FolderTree
  },
  data() {
    return {
      folderList: [],
      fileList: [],
      folderDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除文件夹'
        }
      ],
      fileDrop: [
        {
          name: 'rename',
          title: '重命名'
        },
        {
          name: 'delete',
          title: '删除文件'
        }
      ]
    }
  },
  mounted() {
    Promise.all([getFolderList(), getFileList()]).then(res => {
      this.folderList = res[0],
      this.fileList = res[1]
    })
  },
  methods: {
    beforeDelete() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let error = null
          if(!error) {
            resolve()
          } else reject(error)
        }, 2000);
      })
    }
  }
}
</script>

<style lang="stylus">
.tree-item {
  display inline-block
}
</style>
