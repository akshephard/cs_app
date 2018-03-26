import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  if(user.name == undefined || user.title == undefined || user.start == undefined || user.end == undefined){
    return false;
  } else {
    return true;
  }
}

}
