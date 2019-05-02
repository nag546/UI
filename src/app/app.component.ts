import { Component, OnInit } from '@angular/core';
// import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
// import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styles: ['.required { color: red; }']
})

export class AppComponent implements OnInit {
  model: any = {};
  error:any = {isError:false, errorMessage:''};
  errorCheck:any = {isErrorCheck:false, errorMessageCheck:''};
  isDisabled: boolean;
  //time = {hour: 0, minute: 0, second: 0};

  constructor() {
   }

  ngOnInit() {
    
   }

   checkValue(event: any){
    console.log(event);
    if(!(this.model.allDays || this.model.sun || this.model.mon || this.model.tue || this.model.wed || this.model.thu || this.model.fri || this.model.sat)){
       this.errorCheck= { isErrorCheck:true,errorMessageCheck:"Please select atleast one day's" };
       this.isDisabled = true;
       //return false;
    } else {
      this.errorCheck= { isErrorCheck:false, errorMessageCheck:"" };
      this.isDisabled = false;
    }
  }

   compareTimes(){
    if(this.model.notificationStartTimes > this.model.runWindowStart){
       this.error= { isError:true,errorMessage:"Notification time can't after the window start time" };
       this.isDisabled = true;
       //return false;
    } else {
      this.error= { isError:false, errorMessage:"" };
      this.isDisabled = false;
    }
  }

  onSubmit() {
    if(!(this.model.allDays || this.model.sun || this.model.mon || this.model.tue || this.model.wed || this.model.thu || this.model.fri || this.model.sat)){
      this.errorCheck= { isErrorCheck:true,errorMessageCheck:"Please select atleast one day's" };
      this.isDisabled = true;
   } else {
     this.errorCheck = { isErrorCheck:false, errorMessageCheck:"" };
     this.isDisabled = false;
   }
   if(this.error.isError || this.errorCheck.isErrorCheck) {
    this.isDisabled = true;
   } else {
    this.isDisabled = false;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    // form success code here
   }
  }

  reset() {
    //Reseting form here
  }

}
