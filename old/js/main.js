let menuli=document.getElementById("othermenu");
if(menuli != null){
    let none=menuli.style.visibility="hidden"
}


let mainitem=document.getElementById("item1")
if(mainitem != null){
    mainitem.addEventListener("click", ()=>{
        if(none=="hidden"){
             none=menuli.style.visibility="visible"}
             else if (none=="visible")
             {
             none=menuli.style.visibility="hidden"
             }
    });
}

