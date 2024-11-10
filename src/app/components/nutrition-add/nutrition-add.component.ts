import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { MealType,Nutrition } from 'src/app/Model/nutrition.model';
import { NutritionService } from 'src/app/Service/nutrition.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nutrition-add',
  //standalone: true,
 // imports: ,
  templateUrl: './nutrition-add.component.html',
  styleUrls: ['./nutrition-add.component.css'],
})
export class NutritionAddComponent {
  newNutrition: Nutrition = {
    id: 0,
    name: '',
    description: '',
    mealType: MealType.BREAKFAST,
    quantity: 0,
    calories: 0,
  };

  mealTypes = Object.values(MealType);

  constructor(private nutritionService: NutritionService, private router: Router) {} // Inject Router

  onSubmit() {
    this.nutritionService.addNutrition(this.newNutrition).subscribe({
      next: (nutrition) => {
        console.log('Nutrition added:', nutrition);
        // Redirect to the nutrition list after successful addition
        this.router.navigate(['/nutritions']); // Update this path according to your routing
      },
      error: (error) => {
        console.error('Error adding nutrition', error);
        // Handle the error appropriately
      }
    });
  }
}
