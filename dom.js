// * to exmaine the document object
// console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)

// // to change the title
// document.title = 'Item lister'
// console.log(document.title)


// console.log(document.doctype)
// console.log(document.head)


// console.log(document.all)
// console.log(document.all[7])
// // document.all[7].textContent = 'Add items 2 '


// console.log(document.forms[0])
// console.log(document.links )
// console.log(document.images)


// SELECTORS: Get Element by id
// console.log(document.getElementById("header-title")) 
// var headerTitle = document.getElementById("header-title")
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye' 
// headerTitle.innerHTML = '<h5>Item Lister</h5>' //These 3 are important
// headerTitle.style.borderBottom = 'solid 3px #000'
// need to change the border-bottomm to camelcase


// SELECTORS: Get Elements by class name
// var items = document.getElementsByClassName("list-group-item")
// console.log(items)
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
// for(var i =0; i<items.length; i++){
//     items[i].style.backgroundColor = 'yellow'
// }



// SELECTORS: Get Elements by tag name
// var li = document.getElementsByTagName("li")
// console.log(li)
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'
// for(var i =0; i<li.length; i++){
//     li[i].style.backgroundColor = 'yellow'
// }



// QUERY SELECTOR - onlyy grabs the first one; can use class, id, tag
// var header = document.querySelector("#main-header")
// header.style.borderBottom = 'solid 4px black'
// var input = document.querySelector('input')
// input.value= "Hello world"
// var submit = document.querySelector("input[type='submit']")
// submit.value = "SUBMIT"
// var li = document.querySelector(".list-group-item")
// li.style.color = "red"
// // to get last child
// var last_li = document.querySelector(".list-group-item:last-child");
// last_li.style.color = "green"
// var second_item = document.querySelector(".list-group-item:nth-of-type(2)")
// second_item.style.color = "blue"



// QUERY SELECTOR ALL
// var titles = document.querySelectorAll(".title")  // NodeList
// console.log(titles)
// titles[0].textContent = "Hello"
// var odd = document.querySelectorAll("li:nth-child(odd)")
// var even = document.querySelectorAll("li:nth-child(even)")
// // odd.forEach(element => {
// //     element.style.backgroundColor = "aqua"
// // })
// for(var i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "orange"
//     even[i].style.background = "crimson"
// }




// TRAVERSING THE DOM
// var itemList = document.getElementById("items")
// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode.parentNode)

// console.log(itemList.parentElement)
// // same as parentNode
// itemList.parentElement.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentElement.parentElement.parentElement)

// child Nodes
// console.log(itemList.childNodes) // not recommended as there is text node for line breaks
// console.log(itemList.children) // HTML collection
// itemList.children[1].style.backgroundColor = "yellow"

// first child
// console.log(itemList.firstChild) // gives text node for white space not the first child
// console.log(itemList.firstElementChild) // gives first child

// last child
// console.log(itemList.lastChild) // gives text node for white space not the last child
// console.log(itemList.lastElementChild) // gives last child

// next sibling
// console.log(itemList.nextSibling) // gives text node for white space not the next sibling
// console.log(itemList.nextElementSibling) // gives next sibling

// // previous sibling
// console.log(itemList.previousSibling) // gives text node for white space not the previous sibling
// console.log(itemList.previousElementSibling) // gives previous sibling
// itemList.previousElementSibling.style.backgroundColor = "red"




// CREATING ELEMENTS AND INSERTING IT IN DOM
// var newDiv = document.createElement("div")
// // add class
// newDiv.className = "hello"
// // add id
// newDiv.id = "hello2"
// // add attribute
// newDiv.setAttribute("title","Hello div")
// // create text node
// var newDivText = document.createTextNode("Hello world")
// // add text to div
// newDiv.appendChild(newDivText)
// // add it to the DOM
// var container = document.querySelector("header .container")
// var h1 = document.querySelector("header h1")
// container.insertBefore(newDiv,h1)

// newDiv.style.fontSize = "30px"
// newDiv.style.paddingTop = "0.2rem"
// console.log(newDiv)

// .removeChild() => for removing child


// EVENTS
// const buttonClicked = () => {
//     document.querySelector("#header-title").textContent = "Changed"
//     document.querySelector("#main").style.backgroundColor = "yellow"
// }
// function buttonClicked(e){
//     // document.querySelector("#header-title").textContent = "Changed"
//     // document.querySelector("#main").style.backgroundColor = "yellow"
//     // console.log(e)
//     console.log(e.target)
//     console.log(e.target.id)
//     console.log(e.target.classList)
    // var output = document.querySelector(".output")
//     output.innerHTML = "<h3>Button Clicked</h3>"
//     console.log(e.type)
//     console.log(e.altKey)
//     console.log(e.ctrlKey)
//     console.log(e.shiftKey)
// }


// DIFFERENT TYPES OF EVENTS
// function runEvent(e){
//     // required for submit event
//     e.preventDefault()

//     console.log("Event type: "+e.type)

    // output.innerHTML = "<h3>MouseX:"+ e.offsetX + "</h3> <h3> MouseY:"+ e.offsetY+"</h3>"
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

    // console.log(e.target.value)
    // document.querySelector(".output").innerHTML = "<h3>"+e.target.value+"</h3>"
// }

// var button = document.getElementById("button")
// var box = document.querySelector(".box")
// var itemInput = document.querySelector("input[type=text]")
// var form = document.querySelector("form")
// var select = document.querySelector("select")

// button.addEventListener("click", runEvent)
// button.addEventListener("dblclick", runEvent)
// button.addEventListener("mousedown", runEvent)
// button.addEventListener("mouseup", runEvent)

// box.addEventListener("mouseenter", runEvent)
// box.addEventListener("mouseleave",runEvent)
// // mouseover and mouseout fires of for inner elements as well
// box.addEventListener("mouseover",runEvent)
// box.addEventListener("mouseout",runEvent)
// box.addEventListener("mousemove",runEvent)

// itemInput.addEventListener("keydown",runEvent)
// itemInput.addEventListener("keyup",runEvent)
// itemInput.addEventListener("keypress",runEvent)
// itemInput.addEventListener("focus",runEvent)
// itemInput.addEventListener("blur",runEvent)
// itemInput.addEventListener("cut",runEvent)
// itemInput.addEventListener("paste",runEvent)

// select.addEventListener("change",runEvent)
// select.addEventListener("input",runEvent)

// form.addEventListener("submit",runEvent)


