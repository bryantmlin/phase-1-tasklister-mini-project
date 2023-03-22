
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createList(e.target.new_todo.value)
    //console.log(e.target.new_todo.value)
    form.reset()
  })
});

function createList(item) {
  //console.log(item)
  let p = document.createElement('p')
  let btn = document.createElement('button')

  btn.addEventListener('click',handleDelete)
  btn.textContent = '   x'
  p.textContent = item
  p.appendChild(btn)
  //console.log(p)
  document.querySelector("#list").appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}