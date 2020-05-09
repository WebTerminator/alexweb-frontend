import fetch from 'isomorphic-unfetch'

export const getData = async url => {
  const res = await fetch(url)
  const data = await res.json()
  return { ...data }
}

export const objectToArray = object =>
  Object.keys(object).map(i => object[i])