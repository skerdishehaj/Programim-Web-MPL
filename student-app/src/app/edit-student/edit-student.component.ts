import {Component} from '@angular/core';
import {StudentService} from "../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {Student} from "../interfaces/student";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  student!: Student;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.getStudent()
  }

  getStudent(): void {
    // @ts-ignore
    const id = +(this.activatedRoute.snapshot.paramMap.get("id"));
    this.studentService.getStudent(id).subscribe(resp => this.student = resp)
  }

  onGoBack() {
    this.location.back();
  }

/*  onSave(student: Student): void {
    this.onGoBack()
  }*/

}
