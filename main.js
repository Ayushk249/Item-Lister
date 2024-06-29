

var form = document.querySelector(".form")
var itemList = document.querySelector("#items")
var buttons = document.querySelectorAll(".delete")
var filter = document.querySelector("#filter")

function submitHandler(e){
    e.preventDefault()
    console.log(1)

    var input = document.querySelector("input[type=text]")

    // creating a new li element
    var newli = document.createElement("li")
    newli.className = "list-group-item"
    
    // adding text node to li
    var newlitext = document.createTextNode(input.value)
    newli.appendChild(newlitext)

    // adding delete button to li
    var deletebtn = document.createElement("button")
    deletebtn.textContent ="X"
    deletebtn.className = "btn delete"

    newli.appendChild(deletebtn)

    itemList.appendChild(newli)
}

function deleteHandler(e){
    if(confirm("Are you sure?")){
        var li = e.target.parentElement
        itemList.removeChild(li)
    }
}

function filterHandler(e){
    // get the text from filter input and convert it to lowercase
    var text = e.target.value.toLowerCase()
    // get all the li elements
    var items = itemList.getElementsByTagName("li")

    // convert the HTML collection to array
    var array = Array.from(items)

    array.forEach(item => {
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = "block"
        }else{
            item.style.display = "none"
        }
    })
    
}


// function deletehandler2(e){
//     if(e.target.classList.contains("delete")){
//         if(confirm("Are you sure?")){
//             var li = e.target.parentElement
//             itemList.removeChild(li)
//         }
//     }
// }


form.addEventListener("submit",submitHandler)
buttons.forEach(button => button.addEventListener("click",deleteHandler))
filter.addEventListener("keyup",filterHandler)

// another way 
// itemList.addEventListener("click",deletehandler2)
