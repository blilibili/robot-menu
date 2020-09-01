import httpServe from "@src/utils/http";

export const updateInterMsgVByUsername = (params, config='') => {
	return httpServe.post('/marsplan/mars/admin/order/list', params, config)
}
