// JavaScript source code

    var usuarios_dados =  {
        Usuario1: {
            Login: "Admin",
            Senha: "12345"
        },
        Usuario2: {
            Login: "Cleber",
            Senha: "54321"
        },
        Usuario3: {
            Login: "Josinaldo",
            Senha: "11111"
        }
    };
    
    function logoff (){
        localStorage.removeItem('user');
        window.location.href = "Página inicial.html";
    }

    function analyse (){
    
    
        var aprovacao_nome = "";
    
    
        for(let key in usuarios_dados){
            
            if(usuarios.value == usuarios_dados[key].Login && senhas.value == usuarios_dados[key].Senha){
                aprovacao_nome = usuarios_dados[key].Login;
            }
        };
    
        if(aprovacao_nome!=""){
            console.log("Bem vindo "+aprovacao_nome);
            localStorage.setItem('user',aprovacao_nome);
            window.location.href = "Página inicial.html";
            }
            else{
                console.log("Recusado")
                avisos.style.color = "red";
            }
    
    
}
    var meio =  document.getElementById("loginEspaco");
    var welcome =  document.getElementById("welcome");
    var meio2 =  document.getElementById("userEspaco");
    var submits = document.getElementById("submit");
    var usuarios = document.getElementById("nome");
    var senhas = document.getElementById("senha");
    var avisos = document.getElementById("aviso");
    var saida = document.getElementById("exit");

    if(localStorage.getItem('user')!=null){
            meio.style = "display: none;";
            welcome.innerHTML="Bem vindo, "+ localStorage.getItem('user') + ".";
            saida.addEventListener('click', logoff);

        }
        else{
        meio2.style = "display: none;";
        submits.addEventListener('click', analyse);
        }
        

    console.log(localStorage.getItem('user'));

    
    
    
    
