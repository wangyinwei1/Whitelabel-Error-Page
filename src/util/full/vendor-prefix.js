//https://davidwalsh.name/vendor-prefix

function getVendorPrefix() {
  let styles = window.getComputedStyle(document.documentElement, '');

  let pre = (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) ||
    (styles.OLink === '' && ['', 'o']))[1];

  let dom = 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1];

  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1),
  };
}

export default getVendorPrefix();
