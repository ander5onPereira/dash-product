const urlBase = '/api'


const urls = {
 product:{
    getAll: `${urlBase}/products`,
    getOne: `${urlBase}/products/{{id}}`,
    create: `${urlBase}/products`,
    update: `${urlBase}/products/{{id}}`,
    delete: `${urlBase}/products/{{id}}`,
  }
}

export default urls
