import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { MealType,Nutrition } from 'src/app/Model/nutrition.model';
import { NutritionService } from 'src/app/Service/nutrition.service';

@Component({
  selector: 'app-nutrition-list',
  // standalone: true,
  // imports: [CommonModule, FormsModule],
  templateUrl: './nutrition-list.component.html',
  styleUrls: ['./nutrition-list.component.css']
})
export class NutritionListComponent implements OnInit {
  nutritions: Nutrition[] = [];
  selectedNutrition: Nutrition | null = null;

  constructor(public nutritionservice: NutritionService, public router: Router, public dialog: MatDialog) {} // Made public

  ngOnInit(): void {
    this.loadNutritions();
  }

  loadNutritions(): void {
    this.nutritionservice.getAllNutritions().subscribe({
      next: (data: Nutrition[]) => {
        this.nutritions = data.map(nutrition => ({
          ...nutrition,
        }));
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des nutritions', error);
      }
    });
  }

  loadNutritionDetails(id: number): void {
    this.nutritionservice.getNutritionById(id).subscribe({
      next: (data: Nutrition) => {
        this.selectedNutrition = data; 
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'nutrition par ID', error);
      }
    });
  }

  editNutrition(id: number): void {
    this.router.navigate(['/edit', id]);
  }
  

  updateNutrition(): void {
    if (this.selectedNutrition) {
      const id = this.selectedNutrition.id;
      if (id) {
        this.nutritionservice.updateNutrition(id, this.selectedNutrition).subscribe({
          next: (updatedNutrition) => {
            console.log('Nutrition mise à jour avec succès:', updatedNutrition);
            this.loadNutritions();
            this.clearSelection(); 
          },
          error: (error) => {
            console.error("Erreur lors de la mise à jour de la nutrition", error);
          }
        });
      } else {
        console.error("ID non défini pour la nutrition sélectionnée");
      }
    } else {
      console.error('Aucune nutrition sélectionnée pour mise à jour');
    }
  }

  clearSelection(): void {
    this.selectedNutrition = null;
  }

  deleteNutrition(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet Nutrition ?')) {
      // Supprimer localement l'élément de la liste
      this.nutritions = this.nutritions.filter(nutrition => nutrition.id !== id);
  
      // Effectuer la suppression via le service backend
      this.nutritionservice.deleteNutrition(id).subscribe({
        next: () => {
          console.log(`Nutrition avec ID ${id} supprimé avec succès`);
          // Recharger les nutritions depuis le backend pour s'assurer de la synchronisation
          this.loadNutritions(); 
          this.clearSelection();
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de l\'Nutrition', error);
          // En cas d'erreur, réajouter l'élément supprimé dans la liste
          this.loadNutritions();
        }
      });
    }
  }
  

  addNutrition(): void {
    this.router.navigate(['/addnutrition']); 
  }
}
