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

// Api viacep
document.getElementById("cep").addEventListener("blur", function() {
    let cep = this.value.replace(/\D/g,'');

    if (cep.length != 8) {
        alert("CEP inválido");
        return;
    }

    fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(response => response.json())
    .then(dados => {

        if (dados.erro) {
            alert("CEP não encontrado");
            return;
        }

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    })
    .catch(() => {
        alert("Erro ao buscar CEP");
    });

});

// Api BrasilAPI
document.getElementById("cnpj").addEventListener("blur", function(){
    let cnpj = this.value.replace(/\D/g,'');

    if (cnpj.length != 14) {
        alert("Cnpj inválido!");
        return;
    }

    fetch("https://brasilapi.com.br/api/cnpj/v1/" + cnpj)
    .then(response => response.json())
    .then(dados => {
        if (dados.erro) {
            alert("Cnpj não encontrado!")
            return;
        }

        document.getElementById("nome_empresa").value = dados.razao_social;
        document.getElementById("situacao").value = dados.descricao_situacao_cadastral;
        document.getElementById("uf").value = dados.uf;
    })

    .catch(() => {
        alert("Erro ao buscar o cnpj!")
    });

});

//Api ip-api
document.getElementById().addEventListener("blur", function(){
    fetch("https://ip-api.com/json/")
    .then(response => response.json())
    .then(dados => {
        if (dados.erro) {
            alert("Ip não encontrado!")
            return;
        }
        document.getElementById("ip_usuario").value = dados.query;
        document.getElementById("pais_usuario").value = dados.country;
        document.getElementById("provedor_usuario").value = dados.isp;
    })

    .catch(() => {
        alert("Erro ao buscar o ip!")
    });

});