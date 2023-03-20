import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
    heading = 'Contact Table';
    boolToStringArr= ['age','below 18','more than 18'];
    cols = ['index','name', 'phone', 'gender', 'dob', 'age','delete action'];

    contacts= [
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
    
    deleteRow(event: any){
      this.contacts.splice(event,1);
    }
}
