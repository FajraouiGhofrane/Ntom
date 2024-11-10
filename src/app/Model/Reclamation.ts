// src/app/models/reclamation.ts
export interface Reclamation {
    id: number;  // Make id non-optional
    title: string;
    description: string;
    status: string;
  }
  
  export enum ReclamationStatus {
    Open = 'open',
    InProgress = 'in_progress',
    Closed = 'closed'
  }
  