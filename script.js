/* ======================================================================================
                            SCRIPT DO SISTEMA
   ======================================================================================*/

// Display a welcome message with an alert via a button
document.getElementById("bMessage").addEventListener("click", function(){
    alert("Bem-vindo(a) ao nosso site!");
})

// Changing one message with button
document.getElementById("bNewMessage").addEventListener("click", function(){
    var initialMessage = document.getElementById("headerMessage").innerHTML;
    var oldMessage ='APROVEITE O MUNDO COM MÚSICA';
    var newMessage = 'Esse site possui um script!';
    if(initialMessage!=newMessage){
        document.getElementById("headerMessage").innerHTML = newMessage;
    }
    else{
        document.getElementById("headerMessage").innerHTML = oldMessage;
    }
});

// Changing section color with button
document.getElementById("bNewSectionColor").addEventListener("click", function(){
    var initialColor = document.getElementById("values").style.background;
    var oldColor = "#c79c24";
    var newColor = "#ffffff";
    if(initialColor!=newColor) {
        document.getElementById("values").style.background = newColor;
    }
});

// Hiding and revealing element with button
document.getElementById("bShowElement").addEventListener("click", function() {
    var table = document.getElementById("table");
    if (table.style.display === "none") {
        table.style.display = "block";
    }else{
        table.style.display = "none";
    }
});

// Menu interaction
// Initial
document.getElementById("menuInitial").addEventListener("click", function(){
    alert("Você foi para a seção: Início")
})

// Services
document.getElementById("menuServices").addEventListener("click", function(){
    alert("Você foi para a seção: Serviços")
})

// Contact
document.getElementById("menuContact").addEventListener("click", function(){
    alert("Você foi para a seção: Contato")
})

// Chances image with mouse
var image = document.getElementById('logo');

image.addEventListener('mouseover', function() {
    image.src = '/imagens/music.png';
});

image.addEventListener('mouseout', function() {
    image.src = "/imagens/Gemini_Generated_Image_s3qd1ds3qd1ds3qd.png";
});