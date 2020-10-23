import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from 'node_modules/ngx-bootstrap/alert'
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { EmpresaService } from './empresa.service';
import { FuncAddComponent } from './func-add/func-add.component';
import { FuncEditComponent } from './func-edit/func-edit.component';
import { FuncGetComponent } from './func-get/func-get.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncAddComponent,
    FuncEditComponent,
    FuncGetComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
