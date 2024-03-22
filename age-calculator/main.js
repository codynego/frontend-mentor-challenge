const btn = document.getElementById("button")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const error = document.getElementById("error-1")
const allErrors = document.getElementsByClassName("errors")


const dayError = document.getElementById("error-1")
const monthError = document.getElementById("error-2")
const yearError = document.getElementById("error-3")


const outDay = document.getElementById("out-day")
const outMonth = document.getElementById("out-month")
const outYear = document.getElementById("out-year")

const date = new Date()

const currentYear = date.getFullYear()
const currentMonth = date.getMonth() + 1
const currentDay = date.getDate()


let isError = false;


const calculateAge = (userDate, userMonth, userYear) => {
  const Date = Number(userDate)
  const Month = Number(userMonth)
  const Year = Number(userYear)


  if (userDate === undefined) {
    throw new Error("date must not be passed")
  }
  if (userMonth === undefined) {
    throw new Error("Month must not be passed")
  }
  if (userYear === undefined) {
    throw new Error("Year must not be passed")
  }

  let ageYear = currentYear - Year
  let ageMonth = 0
  let ageDay = Math.abs(Date - currentDay)



  if (currentMonth < Month) {
    ageYear -= 1
    ageMonth = (12 - Month) + currentMonth
  } else {
    ageMonth = currentMonth - Month
  }

  

  return {
    "year": ageYear,
    "month": ageMonth,
    "day": ageDay
  }
}


btn.addEventListener("click", (e) => {
  e.preventDefault()


  if (Number(day.value) > 31) {
    dayError.innerText = "Must be a valid day"
    isError = true
  }

  if (Number(month.value) > 12) {
    monthError.innerText = "Must be a valid month"
    isError = true
  }

  if (Number(year.value) > currentYear) {
    yearError.innerText = "Must be in the past"
    isError = true
  }

  if (day.value === "" || month.value === "" || year.value === "") {
    isError = true
    for (let i = 0; i < allErrors.length; i++) {
      allErrors[i].textContent = "This field is required"
    }
  }

  if (isError === true) {
    const inputs = document.getElementsByClassName("inputs")

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.color = "var(--clr-primary-200)"
      const textInput = inputs[i].querySelector('input')
      const legend = inputs[i].querySelector("legend")

      textInput.style.borderColor = "var(--clr-primary-200)"
      legend.style.color = "var(--clr-primary-200)"
    }
  } else {
    console.log(calculateAge(day.value, month.value, year.value))
    let Cal = calculateAge(day.value, month.value, year.value)
    console.log(Cal)
    outYear.innerText = Cal.year
    outMonth.innerText = Cal.month
    outDay.innerText = Cal.day

  }

  btn.style.backgroundColor = "var(--clr-primary-100)"
})




