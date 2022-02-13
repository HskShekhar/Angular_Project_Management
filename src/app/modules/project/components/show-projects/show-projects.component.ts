import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  projectName: string;
  id: number;
  projectDetails: string;
  createdOn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, projectName: 'P1', projectDetails: 'P1 Details', createdOn: '01-01-2022'},
  {id: 2, projectName: 'P2', projectDetails: 'P2 Details', createdOn: '02-01-2022'},
  {id: 3, projectName: 'P3', projectDetails: 'P3 Details', createdOn: '03-01-2022'},
  {id: 4, projectName: 'P4', projectDetails: 'P4 Details', createdOn: '04-01-2022'},
  {id: 5, projectName: 'P5', projectDetails: 'P5 Details', createdOn: '05-01-2022'},
  {id: 6, projectName: 'P6', projectDetails: 'P6 Details', createdOn: '06-01-2022'},
  {id: 7, projectName: 'P7', projectDetails: 'P7 Details', createdOn: '07-01-2022'},
  {id: 8, projectName: 'P8', projectDetails: 'P8 Details', createdOn: '08-01-2022'},
  {id: 9, projectName: 'P9', projectDetails: 'P9 Details', createdOn: '09-01-2022'},
  {id: 10, projectName: 'P10', projectDetails: 'P10 Details', createdOn: '10-01-2022'},
];
@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  constructor(private router: Router) { }
  displayedColumns: string[] = ['id', 'projectName', 'projectDetails', 'createdOn'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  ngOnInit(): void {
  }

  addProject()
  {
    this.router.navigate(['/home/project/create']);
  }

  updateSelectedProjectRows(position: any)
  {
    console.log(position);
    this.router.navigate(['/home/project/update/'+position]);
    

  }

}
