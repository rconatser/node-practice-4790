const axios = require('axios')
const fs = require('fs')

const fetchData = callback => {
  setTimeout(() => {
    callback('FetchData is Done')
  }, 1500)
}

setTimeout(() => {
  console.log(`Timer is done!`)
  fetchData(text => {
    console.log(text)
  })
}, 2000)

console.log('Hello!')
console.log('Hi!')

async function getSnorlaxData() {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon/snorlax')
    .then(function({ data }) {
      // handle success
      return data
    })
    .catch(function(error) {
      // handle error
      console.log(error)
    })
}

async function getPikachuData() {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function({ data }) {
      // handle success
      return data
    })
    .catch(function(error) {
      // handle error
      console.log(error)
    })
}

async function main() {
  const snorlax = await getSnorlaxData()
  fs.writeFileSync('snorlax.csv', JSON.stringify(snorlax), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
  const pika = await getPikachuData()
  console.log(pika)
}

main()
