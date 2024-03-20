const successPage = document.getElementById("success")

console.log(successPage)


const urlParams = new URLSearchParams(window.location.search);
const nname = urlParams.get('email');
console.log("hey there")
console.log(nname)
successPage.innerText = nname


const butt= document.getElementById('btn');
const emailInput = document.getElementById("emailpl")


const handleSubmit = (emailInput) => {
  const value = emailInput.value;
}

butt.addEventListener('click', (e) => {
  handleSubmit(emailInput)
})

