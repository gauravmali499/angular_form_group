import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../assets/student';
@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  form: FormGroup;
  studentList: Student[] = [];

  constructor() {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      dob: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.min(999999999), Validators.max(9999999999)]),
      address: new FormControl('', [Validators.required])
    })
  }

  submit() {
    this.studentList.push(this.form.value);
  }
}
