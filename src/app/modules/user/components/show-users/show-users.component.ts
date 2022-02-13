import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  firstName: string;
  id: number;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, firstName: 'Hydrogen', lastName: 'Hydrogen', email: 'H'},
  {id: 2, firstName: 'Helium', lastName: 'Hydrogen', email: 'He'},
  {id: 3, firstName: 'Lithium', lastName: 'Hydrogen', email: 'Li'},
  {id: 4, firstName: 'Beryllium', lastName: 'Hydrogen', email: 'Be'},
  {id: 5, firstName: 'Boron', lastName: 'Hydrogen', email: 'B'},
  {id: 6, firstName: 'Carbon', lastName: 'Hydrogen', email: 'C'},
  {id: 7, firstName: 'Nitrogen', lastName: 'Hydrogen', email: 'N'},
  {id: 8, firstName: 'Oxygen', lastName: 'Hydrogen', email: 'O'},
  {id: 9, firstName: 'Fluorine', lastName: 'Hydrogen', email: 'F'},
  {id: 10, firstName: 'Neon', lastName: 'Hydrogen', email: 'Ne'},
];

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private router: Router) { }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  ngOnInit(): void {
  }

  addUser()
  {
    this.router.navigate(['/home/user/create']);
  }

  updateSelectedUserRows(position: any)
  {
    console.log(position);
    this.router.navigate(['/home/user/update/'+position]);
    

  }

}
