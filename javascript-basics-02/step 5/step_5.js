let x =document.querySelectorAll("img")
    for (let i =0 ; i<=x.length ; i++){
        x[i].addEventListener("mouseover",function(){
            document.getElementById("image"+(i+1)).src="images/image"+(i+1)+"_2.jpg"
        })
    }