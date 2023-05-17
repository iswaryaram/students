import { Component, OnInit, VERSION } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  students = [];
  constructor(private studentService: studentService) {}

  ngOnInit() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudentsService().subscribe((data:any)=> {
      console.log(data);
      this.students = data;
    });
  }
  editStudent(id:any){}
  deleteStudent(id:any){}
}
