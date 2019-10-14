
const db = firebase.firestore()

db.collection(`trains`)

// initial variables
let train,
  dest,
  time,
  freq


document.getElementById(`submitBtn`).addEventListener(`click`, e => {
  e.preventDefault()

  train = document.getElementById(`train`).textContent
  dest = document.getElementById(`dest`).textContent
  time = document.getElementById(`firstTime`).textContent
  freq = document.getElementById(`freqMin`).textContent

  db.collection(`trains`).add({
    train: train,
    destination: dest,
    firstArrival: time,
    frequency: freq
  })

})