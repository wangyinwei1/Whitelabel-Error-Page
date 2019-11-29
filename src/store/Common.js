export const validateFields = async (fields, onSuccess, onError) => {
  let obj = {};
  await _.forIn(fields, (v, k) => {
    if (!Array.isArray(v.errors)) {
      if (!v.value && v.value !== 0 && v.require) {
        //err提示
        obj[k] = {
          ...v,
          errors: [
            {
              message: '请必须填写!',
              field: k,
            },
          ],
        };
      }
    } else {
      obj[k] = v;
    }
  });

  let err = _.keys(obj)[0];

  if (!err) {
    await onSuccess({...fields});
  } else {
    await onError({...fields, ...obj});
  }
};
export const getParams = (fields, formData) => {
  let params = {};
  _.forIn(fields, (value, key) => {
    if (formData) {
      formData.append(key, value.value);
    } else {
      params[key] = value.value;
    }
  });
  return formData ? formData : params;
};
