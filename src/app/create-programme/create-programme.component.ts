import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgrammeService } from '../Service/programmeService';
import { ExerciseType, Programme, ProgrammeType } from '../Model/programme';

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.css']
})
export class CreateProgrammeComponent {
  programmeForm: FormGroup;
  programmeTypes = Object.values(ProgrammeType);
  exerciseTypes = Object.values(ExerciseType);

  constructor(private fb: FormBuilder, private programmeService: ProgrammeService) {
    this.programmeForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      type: ['', Validators.required],
      exerciseType: ['', Validators.required]
    });
  }

  // Method to submit the form
  onSubmit() {
    if (this.programmeForm.valid) {
      const newProgramme: Programme = this.programmeForm.value;
      this.programmeService.createProgramme(newProgramme).subscribe({
        next: (response) => {
          console.log('Programme created successfully', response);
          this.programmeForm.reset();
        },
        error: (error) => {
          console.error('Error creating programme', error);
        }
      });
    }
  }
}
