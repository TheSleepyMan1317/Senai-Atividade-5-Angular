import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividade1';

  adicionar(): void {
  const warnings = document.getElementById("warning");
        console.log("oi");
        
        const oi = setTimeout(() => {warnings!.setAttribute('style',"display: default")}, 1);
        const oai = setTimeout(() => {warnings!.setAttribute('style',"display: none")}, 750);
}
}
