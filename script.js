
const button = document.querySelector(".finder");

button.addEventListener("click",function(){
    
    const a = Number(document.querySelector(".length1").value);
    const b = Number(document.querySelector(".length2").value);
    const c = Number(document.querySelector(".length3").value);

    console.log(a, b, c);
    
    
    if( a+b > c && b+c > a && a+c > b){
    
        document.querySelector(".output").value = "These sides can form a triangle";
        console.log(document.querySelector(".output").value);
    
    }

    else{
        
        document.querySelector(".output").value = "These sides cannot form a triangle";
        console.log(document.querySelector(".output").value);
    }
});