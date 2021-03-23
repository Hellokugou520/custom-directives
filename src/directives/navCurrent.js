/* eslint-disable no-unused-vars */
export default {
  /**
   * @param {绑定指令的元素} el
   * @param {对象，包含一些相关属性} binding
   * @param {虚拟节点} vnode
   */
  bind(el, binding, vnode) {
    // 配置项
    const _ops = binding.value,
      _c = el.getElementsByClassName(_ops.className);
    _c[_ops.curIndex].className += ` ${_ops.activeClass}`;
  },
  update(el, binding, vnode) {
    console.log("update");
    const _ops = binding.value,
      _oOps = binding.oldValue,
      _c = el.getElementsByClassName(_ops.className);
    _c[_oOps.curIndex].className = ` ${_oOps.className}`;
    _c[_ops.curIndex].className += ` ${_ops.activeClass}`;
  },
};
