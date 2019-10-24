import http from '@404space/http'

const { get } = http

interface IArticlesParams {
  page: number;
  pageSize: number;
}
export interface IArticlesRes {
  title: string;
  description: string;
}

export const fetchArticles = (params: IArticlesParams): Promise<{
  list: IArticlesRes[],
  total: number,
}> => {
  return get('ARTICLES', { params })
}
