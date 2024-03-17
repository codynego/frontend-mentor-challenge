

const listAll = document.querySelectorAll('.list')

listAll.forEach((obj) => {
  let imgIcon = obj.querySelector('img')
  let para = obj.querySelector('p.hidden')
  imgIcon.addEventListener("click", () => {
    para.classList.toggle('show')
    if (para.classList.contains("show")) {
      imgIcon.src = 'images/icon-minus.svg'
    } else {
      imgIcon.src = 'images/icon-plus.svg'
    }
  })
})
