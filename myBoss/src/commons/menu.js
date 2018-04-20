import router from '../router'
import store from '../store'

export function setMenuActive(path) {
  store.dispatch('saveCurrentMenuActiveAction',path)
}

function heightChange() {
  let sh = document.documentElement.clientHeight;
  let h = document.querySelector('#app div').offsetHeight;
  if(sh + 2 > h){
    document.querySelector('#app').style.height = sh + 'px';
    document.querySelector('body').style.height = sh + 'px';
  }else{
    document.querySelector('#app').style.height = 'auto';
    document.querySelector('body').style.height = 'auto';
  }
}

export  function heightDom(v) {
  v.$nextTick(()=>{
    let flag = false;
    let _path = router.history.current.path;
    //TODO
    if(flag){
      heightChange()
    }else{
      //获取文档中id='app' 的元素
      document.querySelector('#app').style.height = '100%'
      document.querySelector('body').style.height = '100%'
    }
  })
}
