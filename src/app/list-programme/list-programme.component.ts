import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from '../Service/programmeService';
import { Programme } from '../Model/programme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-programme',
  templateUrl: './list-programme.component.html',
  styleUrls: ['./list-programme.component.css']
})
export class ListProgrammeComponent implements OnInit {
  programmes: Programme[] = []; // Specify the type of the programmes array
  errorMessage: string = '';

  constructor(private programmeService: ProgrammeService, private router: Router) {}

  ngOnInit() {
    this.getProgrammes();
  }

  // Fetch the list of programmes
  getProgrammes(): void {
    this.programmeService.getAllProgrammes().subscribe(
      (data) => {
        this.programmes = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching programmes.';
      }
    );
  }
  onUpdate(id: number): void {
    this.router.navigate([`/modif-programme/${id}`]); // Adjust the path as needed
  }
  
  onDelete(programmeId: number): void {
    if (confirm('Are you sure you want to delete this programme?')) {
      this.programmeService.deleteProgramme(programmeId).subscribe(
        () => {
          // Remove the deleted programme from the list locally
          this.programmes = this.programmes.filter(programme => programme.idProgramme !== programmeId);
          alert('Programme deleted successfully!');
        },
        (error) => {
          this.errorMessage = 'Error deleting programme.';
        }
      );
    }
  }
  
}
