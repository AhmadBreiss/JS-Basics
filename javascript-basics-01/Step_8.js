function ahmad(){
    let x = document.getElementById("age").value;
    if (x=>18){
        alert("you are over 18");
    }
    else {
        alert("you are under 18");
    }
}
document.getElementById("validate").onclick=function() {ahmad()};