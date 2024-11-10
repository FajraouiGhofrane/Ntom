import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { ListProgrammeComponent } from './list-programme/list-programme.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModifProgrammeComponent } from './modif-programme/modif-programme.component';
import { ReclamationAddComponent } from './reclamation-add/reclamation-add.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { AjouterReservtionComponent } from './reservation/ajouter-reservation/ajouter-reservtion/ajouter-reservtion.component';
import { AfficherReservtionComponent } from './reservation/afficher-reservation/afficher-reservtion/afficher-reservtion.component';
import { ModifReservationComponent } from './reservation/modif-reservation/modif-reservation.component';
import { NutritionEditComponent } from './nutrition-edit/nutrition-edit.component';
import { NutritionAddComponent } from './components/nutrition-add/nutrition-add.component';
import { NutritionListComponent } from './components/nutrition-list/nutrition-list.component';
import { NutritionService } from './Service/nutrition.service';
import {provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({

  declarations: [
    AppComponent,           
    CreateProgrammeComponent,
    ListProgrammeComponent,
    ModifProgrammeComponent,
    ReclamationAddComponent,
    ListReclamationComponent,
    AjouterReservtionComponent,
    AfficherReservtionComponent,
    ModifReservationComponent,
   
    NutritionListComponent,
    NutritionAddComponent,
    NutritionEditComponent,
    
  ],
  imports: [
    BrowserModule,              // Modules go here
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule, 
  
  ],
  providers: [NutritionService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
