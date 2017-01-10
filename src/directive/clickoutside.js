/**
 * Created by y1205 on 2017/1/8.
 */
let nodeList = []
const CTX = ':clickOutSideContext'
document.addEventListener('click', e => {
  nodeList.forEach(node => node[CTX].eventHandler(e))
})
export default ({
  bind (el, binding) {
    let id = nodeList.push(el) - 1
    let eventHandler = function (e) {
      if (el.contains(e.target)) {
        return false
      } else {
        if (binding.expression) {
          binding.value()
        }
      }
    }
    el[CTX] = {
      id,
      eventHandler
    }
  },
  unbind (el) {
    let len = nodeList.length
    for (let i = 0; i < len; i++) {
      if (nodeList[i][CTX].id === el[CTX].id) {
        nodeList.splice(i, 1)
        break
      }
    }
  }
})
