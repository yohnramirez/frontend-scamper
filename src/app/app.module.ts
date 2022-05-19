import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiciofrontService } from './serviciofront.service';

// Importación de los componentes por cada una de las entidades de la BBDD
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'estudiante',
    component: EstudianteComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServiciofrontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
