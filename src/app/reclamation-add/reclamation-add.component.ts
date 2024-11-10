// src/app/components/reclamation-add/reclamation-add.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reclamation, ReclamationStatus } from '../Model/Reclamation';
import { ReclamationService } from '../Service/ReclamationService';


@Component({
  selector: 'app-reclamation-add',
  templateUrl: './reclamation-add.component.html',
  styleUrls: ['./reclamation-add.component.css']
})
export class ReclamationAddComponent {
  reclamationForm: FormGroup;
  statuses = Object.values(ReclamationStatus);

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService) {
    this.reclamationForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  // Method to submit the form
  onSubmit() {
    if (this.reclamationForm.valid) {
      const newReclamation: Reclamation = this.reclamationForm.value;
      this.reclamationService.createReclamation(newReclamation).subscribe({
        next: (response) => {
          console.log('Reclamation created successfully', response);
          this.reclamationForm.reset();
        },
        error: (error) => {
          console.error('Error creating reclamation', error);
        }
      });
    }
  }
}
