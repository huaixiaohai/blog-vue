import request from '@/utils/request'

export function articleList (query) {
  return request({
    url: '/api/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle (id) {
  return request({
    url: '/api/article/detail',
    method: 'get',
    params: { id }
  })
}

export function getAuthorList () {
  return request({
    url: '/api/search/author/list',
    method: 'get'
  })
}
