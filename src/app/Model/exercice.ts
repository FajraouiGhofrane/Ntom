export enum ExerciseType {
    CARDIO = 'CARDIO',
    CROSS = 'CROSS',
    GYMNAS = 'GYMNAS',
    MEDITATION = 'MEDITATION'
  }
  
  export interface Exercice {
    idExercie: number;   
    nom: string;        
    type: ExerciseType;  
    description?: string; 
    programmeId: number; 
  }
  