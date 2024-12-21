import { Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
  { path: '' ,  component: HomeComponent},
  { path: 'teste' ,  component: TesteComponent},
  { path: 'produtos' ,  component: ProdutosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class MyTemplatesModule { }
