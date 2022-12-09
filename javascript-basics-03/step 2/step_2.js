let text = document.getElementById("texte")
let show = document.getElementById("show")
let hide = document.getElementById("hide")
function id(show , hide ,target){
    show.onclick = function (){
        target.style.display = "block"
    }
    hide.onclick = function(){
        target.style.display = "none"
    }


}
id(show , hide ,text)