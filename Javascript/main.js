var imagen = localStorage.getItem("key");
if(imagen){
    window.addEventListener("load",function(){
        document.getElementById("loader").classList.toggle("loader2");
    });
}else{
    localStorage.setItem("key", "value");
    window.addEventListener("load",function(){
    document.getElementById("loader").classList.toggle("loader2");
    }); 
    alert("Bienvenido a esta pagina web por primera vez");
}
