// Personal API Key for OpenWeatherMap API
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&appid=3bcabe72e33cd2f38dc04fa14f1d1cfb&units=imperial';

/* Global Variables */
const genBtn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
// Event listener to add function to existing HTML DOM element
genBtn.addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e){
let zip = document.getElementById('zip').value;
let feel = document.getElementById('feelings').value;
    getData (baseUrl, zip, apiKey)
    .then (function (data){
    postData('/addData',{temp: data.list[0].main.temp, date: data.list[0].dt_txt, feel: feel});
    retrieveData();
    })
}

/* Function to GET Web API Data*/
const getData = async (baseURL, zip, apiKey)=>{
    const res = await fetch(baseURL+zip+apiKey)

    try {
      //Transform into JSON
      const data = await res.json();
      console.log(data);
      return data;

    }catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}


/* Function to POST data */
const postData = async (url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
 
    try {
      //Transform into JSON
      const newData = await response.json();
      console.log(newData);
      return newData;
             
    }catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}


/* Function to GET Project Data */
const retrieveData = async () =>{
    const request = await fetch('/all');
    console.log(request);

    try {
      // Transform into JSON
      const allData = await request.json()
      console.log(allData)
      // Write updated data to DOM elements
      document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
      document.getElementById('content').innerHTML = allData.feel;
      document.getElementById('date').innerHTML =allData.date;

    }catch(error) {
      console.log('error', error);
      // appropriately handle the error
    }
}
