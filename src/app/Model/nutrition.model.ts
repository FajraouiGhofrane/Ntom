export interface Nutrition {
    id: number; // Le point d'interrogation rend l'ID optionnel pour la création

  name: string;
  description: string;
  mealType:  MealType | null;
  quantity: number;
  calories: number;
  
}


export enum MealType {
    BREAKFAST = 'BREAKFAST',
    LUNCH = 'LUNCH',
    SNACK = 'SNACK',
    DINNER = 'DINNER'
  }