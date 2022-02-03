const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

let url

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

/////

create = "https://reqres.in/api/register"L => {
    axios.post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.inheus",
        password: "pistol"
    })
      .then((response) => {
          console.log("Registration Successful")
      }).catch((err) => {
          console.log("Request Failed");
      })
    
}

button.onclick = () => create(input.value);