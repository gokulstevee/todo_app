var ul = document.getElementById('list')
var li;

var a = document.getElementById('add')
a.addEventListener('click', addItem)

var b = document.getElementById('remove')
b.addEventListener('click', removeItem)



function addItem() {
  console.log("added");
}

function removeItem() {
  li = ul.children
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      console.log(li[index].children[0].checked);
      ul.removeChild(li[index])
    }
  }
}

function addItem() {
  let input = document.getElementById('input')
  let text = input.value
  let p = document.querySelector('#p1')
  let pchildren = p.children
  if (text === '' && pchildren.length===0) {
    let p = document.getElementById('p1')
    let createp = document.createElement('p')
    createp.textContent = '*Enter Your Todo to add'
    p.appendChild(createp)
  }
  else if (text!=='') {
    for (let index = 0; index < pchildren.length; index++) {
      const element = pchildren[index];
      p.removeChild(element)
    }
  } 
}