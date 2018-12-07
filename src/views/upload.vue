<template>
  <div class="">
    <Upload 
      :action="`${baseURL}/upload_file`" 
      multiple
      :before-upload="beforUpload"
      :on-success="handleSuccess"
    >
      <Button icon="ios-cloud-upload-outline">文件上传</Button>
    </Upload>
    <Table :columns="columns" :data="fileList"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
import { baseURL } from '@/config'
import { downloadFile } from '@/lib/util'


export default {
  components: {},
  data() {
    return {
      baseURL: baseURL,
      file: {},
      columns: [
        { title: '文件key', key: 'key' },
        { title: '文件名', key: 'file_name' },
        { title: '文件类型', key: 'file_type' },
        { title: '文件大小', key: 'file_size' },
        { title: '上传时间', key: 'createAt' },
        { 
          title: '存储有效期', 
          key: 'storage_time', 
          render: (h, {row}) => {
            return (
              <span>
                {row.storage_time ? row.storage_time : '永久'}
              </span>
            )
          }
        },
        { 
          title: '操作', 
          key: 'handle',
          render: (h, {row}) => {
            return (
              <span>
                <i-button on-click={this.download.bind(this, row.key)}>下载</i-button>
              </span>
            )
          }  
        },
      ],
      fileList: [
        {
          key: '1511501210',
          file_name: '毒液'
        },
        {
          key: '666',
          file_name: '西红柿'
        }
      ]
    }
  },
  methods: {
    beforUpload(file) {
      console.log(file)
      this.file = file
    },
    handleSuccess() {
      this.$Message.success('文件上传成功')
    },
    download(key) {
      downloadFile({
        url: `${baseURL}/get_file`,
        params: {
          key,
          type: 'download'
        }
      })
    }
  }
};
</script>

<style scoped lang="stylus">
</style>
