// create database variable
const db = firebase.firestore()

// create data collection
db.collection(`trains`)

// event listener to add train data to firebase
document.getElementById(`submitBtn`).addEventListener(`click`, e => {
  
  e.preventDefault()

  // create variable as object data from form inputs for firebase
  let trainData = {
    train: document.getElementById(`train`).value,
    destination: document.getElementById(`dest`).value,
    firstArrival: document.getElementById(`firstTime`).value,
    frequency: document.getElementById(`freqMin`).value
  }

  // add train data from form to firebase
  db.collection(`trains`).add(trainData)

  // clear form after data added to firebase
  document.getElementById(`train`).value = ``
  document.getElementById(`dest`).value = ``
  document.getElementById(`firstTime`).value = ``
  document.getElementById(`freqMin`).value = ``
})