let div = document.createElement("div")
document.body.appendChild(div)
div.id="dive1";
function ahmad() {
let x=document.querySelector("#name").value
document.querySelector("#dive1").innerHTML=x
}
document.querySelector("#name").onchange=function() {(ahmad())}