
import http from "./http";

export function loginAuth(params) {
  const url = 'operationService/operationLogin.html'
  return http.post(url,params)
}
