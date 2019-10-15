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

db
  .collection(`trains`)
  .onSnapshot(({ docs }) => {

    document.getElementById(`trainInfo`).innerHTML = ``

    // forEach loop to grab data from array and show on schedule table
    docs.forEach(route => {
      let { train, destination, frequency, firstArrival } = route.data()

      // create table element for each submit event
      let trainElem = document.createElement(`tr`)
      trainElem.innerHTML = `
      <tr>
        <td id="trainName">${train}</td>
        <td id="destination">${destination}</td>
        <td id="frequency">${frequency}</td>
        <td id="nextArrival"></td>
        <td id="minutesAway"></td>
      </tr>
      `
      // append new train data to table for each submit event
      document.getElementById(`trainInfo`).append(trainElem)

    })
  })