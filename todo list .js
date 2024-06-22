
var list=document.getElementById("list")
var inp=document.getElementById("inp")
function add()
{
    var li=document.createElement("li")
    li.innerHTML=inp.value+"<button onclick=deletion(event) style=background-color:skyblue>DELETE</button>"
    list.append(li)
}
function deletion(event)
{
    event.target.parentElement.remove()
}
