export function getRedirects(path, routerData) {
  const paths = Object.keys(routerData).filter(
    routePath =>
      routePath.indexOf(path) === 0 && routerData[routePath].redirect,
  );

  return paths.map(path => ({
    key: path,
    exact: true,
    from: path,
    to: routerData[path].redirect,
  }));
}

export function getRoutes(path, routerData) {
  const paths = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path,
  );

  return paths.map(path => {
    const route = routerData[path];

    return {
      key: path,
      path,
      exact: route.exact != null ? route.exact : true,
      strict: route.strict != null ? route.strict : false,
      component: route.component,
    };
  });
}
export function random6() {
  return new Date()
    .getTime()
    .toString()
    .substr(-6, 6);
}
/**
 *  * 获取cookie函数
 *   * @param name {string} 获取cookie的key
 *    * @returns {*|T}
 *     */
export function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2)
    return parts
      .pop()
      .split(';')
      .shift();
}
/**
 *  * 设置cookie函数
 *   * @param c_name {string} 设置cookie的key
 *    * @param value {string}  设置cookie的value
 *     * @param expiredays {number}      设置cookie的到期天数
 *      */
export function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}

export function uncapitalize(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function intersectObjects(objects, recursive, optionalTarget) {
  function ascSort(a, b) {
    return a.distance - b.distance;
  }

  function intersectObject(object, raycaster, intersects, recursive) {
    if (object.visible === false) return;

    object.raycast(raycaster, intersects);

    if (recursive === true) {
      var children = object.children;

      for (var i = 0, l = children.length; i < l; i++) {
        intersectObject(children[i], raycaster, intersects, true);
      }
    }
  }

  var intersects = optionalTarget || [];

  if (Array.isArray(objects) === false) {
    console.warn('THREE.Raycaster.intersectObjects: objects is not an Array.');
    return intersects;
  }

  for (var i = 0, l = objects.length; i < l; i++) {
    intersectObject(objects[i], THREE.Ray, intersects, recursive);
  }

  intersects.sort(ascSort);

  return intersects;
}
