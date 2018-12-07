import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
    const template = {
        'str|2-4': 'lxy',
        'name|5': 'lxy',
        'age|+2': 18,
        'bool|1-9': true,  //概率值 出现true为1/10
        'reg': /[1-9][a-z]/, //生成匹配正则字符串
        'email': Random.email(),
        'paragf': Random.paragraph(2,4)
    }
    let i = 3
    let arr = []
    while(i--) {
        arr.push(template)
    }
    return Mock.mock(arr)
}

export const authorization = () => {
    return {
        code: 200,
        data: {
            token: 'xxx',
            rules: {
                page: {
                    authorization: false,
                }
            }
        }
    }
}