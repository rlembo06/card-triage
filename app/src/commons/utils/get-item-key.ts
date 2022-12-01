import type { Key } from 'react'

function getItemKey<T>(keyPropName: Key | ((...arg: any) => Key), item: T): Key | undefined {
  let key: Key | undefined

  if (typeof keyPropName === 'function') {
    key = keyPropName(item)
  } else if (keyPropName as Key) {
    // @ts-ignore: "keyPropName" existis in item
    key = item[keyPropName]
  } else {
    // @ts-ignore: "keyPropName" existis in item
    ({ key } = item)
  }

  return key
}

export default getItemKey
