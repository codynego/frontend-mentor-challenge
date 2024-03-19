const butt= document.getElementById('btn');
const emailInput = document.getElementById("emailpl")


const handleSubmit = (emailInput) => {
  const value = emailInput.value;
  console.log(value);
}

butt.addEventListener('click', (e) => {
  console.log("hello")
  handleSubmit(emailInput)
})

