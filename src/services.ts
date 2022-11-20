import camelcaseKeys from 'camelcase-keys'

export const fetchJson = (url: string) => fetch(url)
  .then(res => res.json().then(json => camelcaseKeys(json, { deep: true })))

export const loadChangelog = (projectPath: string) => fetchJson(
  `/${projectPath}/-/blob/master/CHANGELOG.md?format=json&viewer=rich`
)