export interface Programme {
  idProgramme: number;
  type: ProgrammeType;
  titre: string;
  description?: string;
  exerciseType: ExerciseType; 
}
export enum ExerciseType {
  CARDIO = 'CARDIO',
  CROSS = 'CROSS',
  GYMNAS = 'GYMNAS',
  MEDITATION = 'MEDITATION'
}
export enum ProgrammeType {
  FITNESS = 'FITNESS',
  MENTAL = 'MENTAL',
  CROSSFIT = 'CROSSFIT',
  YOGA = 'YOGA',
  STRENGTH = 'STRENGTH',
  ENDURANCE = 'ENDURANCE',
  FLEXIBILITY = 'FLEXIBILITY'
}