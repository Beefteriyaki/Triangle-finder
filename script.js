
const button = document.querySelector(".finder");

button.addEventListener("click",function(){
    let text = document.querySelector(".output").textContent;
    
    const a = document.querySelector(".length1").value;
    const b = document.querySelector(".length2").value;
    const c = document.querySelector(".length3").value;


    if(a+b>c && b+c>a && a+c>b){
        text = "The given sides can form a triangle"
    }
});