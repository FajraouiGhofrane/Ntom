import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionListComponent } from './components/nutrition-list/nutrition-list.component';
import { NutritionAddComponent } from './components/nutrition-add/nutrition-add.component';
import { NutritionEditComponent } from './nutrition-edit/nutrition-edit.component';

// Déclarez vos routes ici
const routes: Routes = [
  { path: 'nutritions', component: NutritionListComponent },
  { path: 'edit/:id', component: NutritionEditComponent },
  { path: 'addnutrition', component: NutritionAddComponent },
 // { path: '', redirectTo: '/nutritions', pathMatch: 'full' } // Default route to redirect to nutrition list
];

// Déclarez AppRoutingModule et exportez le module de routage
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
