'use strict'

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);


create = URL => {
    axios.post(URL, {
        email : "eve.holt@reqres.in",
        password : "pistol"
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

button.onclick = () => create(input.value);