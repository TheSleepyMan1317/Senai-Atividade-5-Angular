

    var contador = 1;
    warnings = document.getElementById("warning");
    warnings.style = "display: none";

    var test = {
        
        produto1: {
        Nome: "Case F3 para HD SATAP 2.5",
        Valor: "R$ 9,99",
        Imagem: "./produto.jpg",
        Descricao: "aaaa"
        },
        produto2: {
        Nome: "Notebook Ultra, com Windows 11 Home",
        Valor: "R$ 1398,00",
        Imagem: "./produto1.jpg",
        Descricao: "aaaa"
        },
        produto3: {
        Nome: "Teclado Gamer Exbom",
        Valor: "R$ 59,42",
        Imagem: "./produto2.jpg",
        Descricao: "aaaa"
        },
        produto4: {
        Nome: "TMouse Gamer Logitech G203 Prodigy",
        Valor: "R$ 239,00",
        Imagem: "./produto3.jpg",
        Descricao: "aaaa"
        },
        produto5: {
        Nome: "HD Externo 4TB Portátil Toshiba",
        Valor: "R$ 839,99",
        Imagem: "./produto4.jpg",
        Descricao: "aaaa"
        }

        
        
    };
    

    for(let key in test){
        const div = document.createElement("div");
        div.setAttribute("id","produto_case"+contador);
        div.setAttribute("class", "produtos centralizado");
        div.setAttribute("style", "text-align:center;");
        document.getElementById("produtos").appendChild(div);

        const img1 = document.createElement("img");
        img1.setAttribute("class", "produto");
        img1.setAttribute("src", test[key]["Imagem"]);
        document.getElementById("produto_case"+contador).appendChild(img1);

        const hr = document.createElement("hr");
        document.getElementById("produto_case"+contador).appendChild(hr);
    
        const div2 = document.createElement("div");
        div2.setAttribute("id","p"+contador);
        div2.setAttribute("style","text-align:center");
        document.getElementById("produto_case"+contador).appendChild(div2);

        const pa = document.createElement("h1");
        pa.innerText = test[key]["Nome"];
        pa.setAttribute("class", "NomeProduto");
        document.getElementById("p"+contador).appendChild(pa);

        const pa2 = document.createElement("h1");
        pa2.innerText = test[key]["Valor"];
        pa2.setAttribute("class", "ValorProduto");
        document.getElementById("p"+contador).appendChild(pa2);

        const btn = document.createElement("button");
        btn.setAttribute("id","btn"+contador);
        btn.setAttribute("class", "BotaoComprar");
        btn.setAttribute("value", "produto"+contador);
        document.getElementById("produto_case" + contador).appendChild(btn);

        

        contador = contador+1;
    };



    function Ler_Produto(){
        id = event.srcElement.id;
        console.log(test[id]);
        const div = document.createElement("div");
        div.setAttribute("id","produto_case"+contador);
        div.setAttribute("class","produtos");
        document.getElementById("produtos").appendChild(div);
        const pa = document.createElement("p");
        pa.innerText = test[id]["Nome"];
        document.getElementById("produto_case"+contador).appendChild(pa);
        contador = contador+1;
        console.log(contador);
    }


    function Add_Carrinho() {
        id = event.srcElement.id;
        button = document.getElementById(id);
        console.log(button.value);
        if (localStorage.getItem(button.value) != null) {
            var atual = localStorage.getItem(button.value);
            atual = parseInt(atual);
            localStorage.setItem(button.value, atual+1);
        }
        else {
            localStorage.setItem(button.value, 1);
        }
        console.log(localStorage.getItem(button.value));
        
        const oi = setTimeout(() => {warnings.style = "display: default";}, 1);
        const oai = setTimeout(() => {warnings.style = "display: none";}, 750);
         console.log(lista["produto1"]);
    }


    
    var botoes_produtos = document.querySelectorAll(".botao_produto");
    
    botoes_produtos.forEach(test => {
        test.addEventListener("click", Ler_Produto);
    });


    var botoes_comprar = document.querySelectorAll(".BotaoComprar");
    botoes_comprar.forEach(test => {
        test.addEventListener("click", Add_Carrinho);
    });

    
    
    
    
