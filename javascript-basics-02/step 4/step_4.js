function ahmad() {
    let x = confirm("are you sure to clear all information?")
    if (x==true){
        document.getElementById("name").value=""
        document.getElementById("surname").value=""
        document.getElementById("city").value=""
        }
}
document.querySelector("button").onclick=function() {ahmad()}
