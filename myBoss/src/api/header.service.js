
import http from "./http";

export function getMenuSrv(params) {
  const url = '/operationService/operationUserMenu.html'
  return http.post(url,params)
}
