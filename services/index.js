import { toJson } from 'unsplash-js'

const Unsplash = require('unsplash-js').default
const unsplash = new Unsplash({
  accessKey: 'il2iZxt_p7eQEZjKkuNHezK3jPN328U2nQVqozwCBGY'
})

export const getPhoto = unsplash.photos.listPhotos(2, 15, 'latest')
  .then(toJson)
  .then((json) => {
    console.log(json)
  })
