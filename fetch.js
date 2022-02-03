
   
import * as DOM from "./Dom22.js";

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

function read (URL) 
{
    axios.get(URL)
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

 function create (URL)
 {
    axios.post(URL, {
      name: `Morpheus`,
      Job : `Leader`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }


function register (URL)
 {
    axios.post(URL, {
      email: `eve.holt@reqres.inheus`,
      password : `pistol`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }


  function login (URL)
 {
    axios.post(URL, {
      email: `eve.holt@reqres.inheus`,
      password : `cityslicka`
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  button.onclick = () => login(input.value);