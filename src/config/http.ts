export const BASE_URL = {
  development: '',
  production: '',
}

export const BASE_CONFIG = {
  defaults: {
    timeout: 60 * 1000,
  },
  // http config on development only
  development: {
    withCredentials: true,
  },
}

export const API_LIST = {
  USER_INFO: '/api/user_info',
  UPLOAD_SVG: '/api/svg/upload',
  ICONS: '/api/icon/all',
  UPLOAD_ICON: '/api/icon/upload',
  UPDATE_ICON: '/api/icon/update/${id}',
  DOWNLOAD_ICON: '/api/icon/download',
  OPERATION: '/api/operation/oneMonth',
  READ_OPERATION: '/api/operation/read',
  DELETE_ICON: '/api/icon/delete/${id}',
}

export default {
  BASE_URL,
  API_LIST,
  BASE_CONFIG,
}
