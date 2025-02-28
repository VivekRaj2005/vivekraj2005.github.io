export function Groupify(
  array: Array<any>,
  memebers: number
): Array<typeof array> {
  const return_array: Array<typeof array> = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index % memebers === 0) {
      return_array.push([]);
    }
    return_array[return_array.length - 1].push(element);
  }
  return return_array;
}

export function createNegativeIndexingArray(arr: Array<any>) {
  return new Proxy(arr, {
    get(target, prop: any) {
      const index = Number(prop);
      if (Number.isInteger(index)) {
        if (index < 0) {
          // Convert negative index to positive index
          return target[target.length + index];
        }
        return target[index];
      }
      return target[prop];
    },
    set(target, prop: any, value) {
      const index = Number(prop);
      if (Number.isInteger(index)) {
        if (index < 0) {
          // Convert negative index to positive index
          target[target.length + index] = value;
        } else {
          target[index] = value;
        }
        return true;
      }
      target[prop] = value;
      return true;
    },
  });
}

export function JSONtoFormData(json: { [key: string]: any }): FormData {
  const formData = new FormData();
  for (const key in json) {
    formData.append(key, json[key]);
  }
  return formData;
}
