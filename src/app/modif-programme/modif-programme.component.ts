import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../Service/programmeService';
import { Programme } from '../Model/programme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup

@Component({
  selector: 'app-modif-programme',
  templateUrl: './modif-programme.component.html',
  styleUrls: ['./modif-programme.component.css']
})
export class ModifProgrammeComponent  {
}