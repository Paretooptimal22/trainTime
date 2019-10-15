
const db = firebase.firestore()

db.collection(`trains`)

// // initial variables
// let train,
//   dest,
//   time,
//   freq


document.getElementById(`submitBtn`).addEventListener(`click`, e => {
  
  e.preventDefault()

  let trainData = {
    train: document.getElementById(`train`).value,
    destination: document.getElementById(`dest`).value,
    firstArrival: document.getElementById(`firstTime`).value,
    frequency: document.getElementById(`freqMin`).value
  }
  db.collection(`trains`).add(trainData)

  document.getElementById(`train`).value = ``
  document.getElementById(`dest`).value = ``
  document.getElementById(`firstTime`).value = ``
  document.getElementById(`freqMin`).value = ``
})