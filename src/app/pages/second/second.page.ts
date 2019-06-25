import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

	ngOnInit() {
		/* Solution 1 */
		let name = this.route.snapshot.paramMap.get('name');	
		console.log(name);
		/* Solution 2 */
		let fullName = this.dataService.getUserName();
		console.log(fullName);
	}
}
