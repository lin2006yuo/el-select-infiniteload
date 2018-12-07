export const baseURL = process.env.NODE_ENV === 'production'
    ? 'http://production.com'
    //开始mock的时候全写
    : 'http://localhost:3000'