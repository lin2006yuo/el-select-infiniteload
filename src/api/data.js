import axios from './index'

export const getTableData = () => {
  return axios.request({
    url: 'getTableData',
  })
}


export const getFolderList = () => {
  return axios.request({
    url: '/getFolderList',
    method: 'get'
  })
}

export const getFileList = () => {
  return axios.request({
    url: '/getFileList',
    methods: 'get'
  })
}

export const sendFormData = (data) => {
  return axios.request({
    url: 'formData',
    data,
    method: 'post'
  })
}