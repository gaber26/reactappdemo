import http from './http'

export let urlPrefix = '/oa'

export const articleList = (data) => http(`${urlPrefix}/articleList`, data, 'POST') // 查询文章列表