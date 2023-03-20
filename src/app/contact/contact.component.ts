import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ContactService } from '../contact.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private aService: ContactService){}
  // cols = this.aService.cols;
  // rows= this.aService.contacts;
  // heading = this.aService.heading;
  // arr= this.aService.boolToStringArr;
    heading = 'Contact Table';
    arr= ['age','below 18','more than 18'];
    cols = ['index','name', 'phone', 'gender', 'dob', 'age','delete action'];

    rows= [
        {
          index: '1',
          name: 'Rahul',
          phone: '7865445532',
          gender: 'male',
          dob: '05/04/2007',
          age: '16',
        },
        {
          index: '2',
          name: 'Rohit',
          phone: '786455532',
          gender: 'male',
          dob: '05/03/2017',
          age: '6',
        },
        {
          index: '3',
          name: 'Tanya',
          phone: '7864545532',
          gender: 'Female',
          dob: '12/04/2000',
          age: '23',
        },
        {
          index: '4',
          name: 'Raj',
          phone: '7865445532',
          gender: 'male',
          dob: '01/06/2007',
          age: '16',
        },
        {
          index: '5',
          name: 'Ketan',
          phone: '7865445532',
          gender: 'male',
          dob: '05/03/2007',
          age: '16',
        },
    ];
  removeRow(index: any){
    // this.rows.splice(index,1);
    this.aService.deleteRow(index);
  }
}
