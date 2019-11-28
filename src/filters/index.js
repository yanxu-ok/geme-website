const filters = [
  {
    name: 'test',
    handler(value) {
      console.log(value)
    }
  }
]

const install = (_Vue) => {
  filters.forEach((filter) => {
    _Vue.filter(filter.name, filter.handler)
  })
}

export default {
  install
}