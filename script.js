const lampada = document.getElementById("lampada")

lampada.addEventListener("mouseover",acender);
lampada.addEventListener("mouseout",apagar);

function acender(){
    lampada.scr = "on.png";
    document.body.style.background = "#ffeb3b22";
}

function apagar(){
    lampada.scr = "off.png";
    document.body.style.background = "#222";
}