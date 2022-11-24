

const modify = (array, callback) => {
  array.push('Hola desde modify')
  callback(array)
}


const names = ['justin', 'nadia', 'lara']

modify(names, (array) => {
  console.log(array)
})
