import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

	name: string;
	firstName: string;
	lastName: string;

	ngOnInit() {

	}

    changePage(event) {
    	/* Solution 1 */
        this.name = "John";
        this.router.navigateByUrl('/second/' + this.name);
        /* Solution 2 */
        this.firstName = "Billy";
        this.lastName = "Idol";
		this.dataService.setUserName(this.firstName, this.lastName);
    }
}
