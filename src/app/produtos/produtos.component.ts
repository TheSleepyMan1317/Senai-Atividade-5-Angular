import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {

adicionar(): void {
  const warnings = document.getElementById("warning");
        console.log("oi");
        
        const oi = setTimeout(() => {warnings!.setAttribute('style',"display: default")}, 1);
        const oai = setTimeout(() => {warnings!.setAttribute('style',"display: none")}, 750);
}
}
