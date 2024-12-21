import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  submits(login:any){
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

    


     var aprovacao_nome = "";
    var nome = login.form.controls.nome;
    var senha = login.form.controls.senha;


    var avisos = document.getElementById("aviso");

        for(let key in usuarios_dados){


            if(nome.value == usuarios_dados[key as keyof typeof usuarios_dados].Login && senha.value == usuarios_dados[key as keyof typeof usuarios_dados].Senha){
                aprovacao_nome = usuarios_dados[key as keyof typeof usuarios_dados].Login;
            }
        };
    
        if(aprovacao_nome!=""){
            console.log("Bem vindo "+aprovacao_nome);
            localStorage.setItem('user',aprovacao_nome);
            window.location.href = "/";
            }
            else{
                console.log("Recusado")
                avisos!.style.color = "red";
            }
    
    


    
    console.log(nome.value);
  }
}
