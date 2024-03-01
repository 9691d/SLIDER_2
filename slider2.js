let btn = document.querySelector("button");
let wrapImgs = document.querySelector(".wrapImgs");
let left = 0;

btn.addEventListener("click",function(){
    left = left + 190;
    console.log(left);
    
    wrapImgs.style.marginLeft = - left + "px";
    if(left > 570){
        left = 0;
        wrapImgs.style.marginLeft = 0 + "px";
    }
})
