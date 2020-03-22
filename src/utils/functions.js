export function addOrUpdate(arr, obj) {
  if (!Array.isArray(arr)) {
    throw 'input parameter is not type of Array';
  }
  let includesObj = false;
  const output = arr.map(arrItem => {
    if (arrItem.id == obj.id) {
      includesObj = true;
      return obj;
    }
    return arrItem;
  });

  if (!includesObj) {
    output.push(obj);
  }

  return output;
}
