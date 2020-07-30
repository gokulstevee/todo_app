var ul = document.getElementById('list')
var li;
var input = document.getElementById('input')
var text = input.value

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
  let p = document.querySelector('#p1')
  let pchildren = p.children
  if (input.value === '' && pchildren.length === 0) {
    let p = document.getElementById('p1')
    let createp = document.createElement('p')
    createp.textContent = '*Enter Your Todo to add'
    p.appendChild(createp)
  }
  else if (input.value !== '') {

    // adding todo
    var textnode = document.createTextNode(input.value)
    // create li 
    li = document.createElement('li')

    // create checkbox 
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id', 'check')

    // create label
    var label = document.createElement('label')
    label.setAttribute('for', 'item')//optional

    // appending
    label.appendChild(textnode)
    li.appendChild(checkbox)
    li.appendChild(label)
    ul.appendChild(li)
    // ul.insertBefore(li, ul.childNodes[0])
    setTimeout(() => {
      li.className = 'visual'
    }, 2)
    input.value = ''

    for (let index = 0; index < pchildren.length; index++) {
      const element = pchildren[index];
      p.removeChild(element)
    }
  }
}