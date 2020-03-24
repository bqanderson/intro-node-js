// console.log(module)
// throw new Error('oops')

const add = (num, num2) => {}

const notPublic = () => {
  add()
}

module.exports = { add, thing() {}, value: 1 }
