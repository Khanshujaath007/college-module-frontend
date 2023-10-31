import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CollegeService } from './college.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'college';

  collegeDetails = null as any;

  constructor(private collegeService: CollegeService) {
    this.getCollegeDetails();
  }

  register(registerForm: NgForm) {
    this.collegeService.registerCollege(registerForm.value).subscribe(
      (resp) => {
        // console.log(resp);
        registerForm.reset();
        this.getCollegeDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCollegeDetails() {
    this.collegeService.getCollege().subscribe(
      (resp) => {
        console.log(resp);
        this.collegeDetails = resp;
      },

      (err) => {
        console.log(err);
      }
    );
  }

  deleteColleges(colleges: any) {
    this.collegeService.deleteColleges(colleges.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getCollegeDetails();
      },

      (err) => {
        console.log(err);
      }
    );
  }

  collegeToUpdate = {
    id: '',
    name: '',
    location: '',
    // admin:""
  };
  edit(college: any) {
    this.collegeToUpdate = college;
  }

  updateCollege() {
    this.collegeService
      .updateCollege(this.collegeToUpdate, this.collegeToUpdate.id)
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
