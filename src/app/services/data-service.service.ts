import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	firstName: string;	
	lastName: string;

	constructor() { }

    setUserName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;       
    }
  
    getUserName() {
        return this.firstName + ' ' + this.lastName;
    } 	
}
