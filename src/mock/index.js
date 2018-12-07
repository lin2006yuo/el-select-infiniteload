import Mock from 'mockjs'
import {getUserInfo} from './response/user'
import { getTableData, getFileList, getFolderList } from './response/data'

//拦截请求
Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
Mock.mock('http://localhost:3000/getTableData', getTableData)
Mock.mock('http://localhost:3000/getFileList', getFileList)
Mock.mock('http://localhost:3000/getFolderList', getFolderList)

Mock.setup({
    timeout: 500
})

export default Mock