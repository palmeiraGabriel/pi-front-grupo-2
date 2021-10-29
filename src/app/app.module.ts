import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { AtualizarCadastroComponent } from './components/atualizar-cadastro/atualizar-cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalProdutoComponent } from './components/modal-produto/modal-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutComponent,
    ProductComponent,
    ListProductsComponent,
    ModalLoginComponent,
    ModalCadastroComponent,
    AtualizarCadastroComponent,
    HomeComponent,
    ModalProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
