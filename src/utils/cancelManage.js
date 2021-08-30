/*
 * @file: 取消请求管理
 * @author: dongyang
 */

let CancelManageMap = {}

/**
 * 添加 request
 * @param req
 */
const addCancel = ({ reqId, url, source }) => {
  if (!CancelManageMap[reqId]) {
    CancelManageMap[reqId] = {
      reqId,
      url,
      source
    }
  }
}

/**
 * 取消指定 reqId 的 request
 * @param reqId
 */
const cancelById = reqId => {
  CancelManageMap[reqId]?.source?.cancel?.()
  delete CancelManageMap[reqId]
}

/**
 * 取消不是传入 reqId 的 request
 * @param reqId
 */
const cancelOthersById = reqId => {
  Object.keys(CancelManageMap).forEach(item => {
    if (item !== reqId) {
      CancelManageMap[reqId]?.source?.cancel?.()
    }
  })
  CancelManageMap = CancelManageMap[reqId]
}

/**
 * 取消所有 request
 */
const cancelAllRequest = () => {
  Object.values(CancelManageMap).forEach(item => {
    item?.source?.cancel?.()
  })
  CancelManageMap = {}
}

export { addCancel, cancelById, cancelOthersById, cancelAllRequest }
