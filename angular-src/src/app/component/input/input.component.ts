import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name: String;
  title: String;
  start: String;
  end: String;

  constructor(
    private validateService: ValidateService,
    private authService:AuthService,
  ) { }

  ngOnInit() {
  }
  onInputSubmit(){
    const user = {
    name: this.name,
    title: this.title,
    start: this.start,
    end: this.end
  }
    // Required fields
    if(!this.validateService.validateRegister(user)){
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log("please fill in all fields");
      return false;
    }
    //console.log(this.name);
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        console.log("success");
        //this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
      } else {
        console.log("fail");
        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
      }
    });


  }
}
