// src/app/components/list-reclamation/list-reclamation.component.ts
import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../Model/Reclamation';
import { ReclamationService } from '../Service/ReclamationService';


@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.getReclamations();
  }

  getReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe({
      next: (data) => {
        this.reclamations = data;
      },
      error: (error) => {
        console.error('Error fetching reclamations', error);
      }
    });
  }
  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this reclamation?')) {
      this.reclamationService.deleteReclamation(id).subscribe({
        next: () => {
          this.reclamations = this.reclamations.filter(
            (reclamation) => reclamation.id !== id
          );
          alert('Reclamation deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting reclamation', error);
        }
      });
    }
  }
}
