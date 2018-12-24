const getField = (mdfs) => {
  mdfs = Object.keys(mdfs);
  if (mdfs[0]) {
    return mdfs[0];
  } else {
    console.error(`sf not define field`)
  }
};

export default function (Vue) {
  Vue.directive('sf', {
    bind(el, bind, vnode) {
      console.log('directive bind')
      console.log(el)
    },
    update(el, bind, vnode) {
      console.log({
        el,
        bind,
        vnode,
        vnodeInstance: vnode.componentInstance,
        fieldComponent: vnode.componentInstance.$parent.fieldComponents,
      })
      const field = getField(bind.modifiers);
      function injectBox(parent) {
        if (!parent) {
          console.error('error');
        }
        if (parent._isVue && parent.fieldComponents) {
          parent.fieldComponents[field] = vnode;
        } else {
          injectBox(parent.$parent);
        }
      }
      injectBox(vnode.componentInstance.$parent);
    },
  })
}