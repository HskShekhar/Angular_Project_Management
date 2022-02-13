import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  saveProject(){

  }

  cancel(){
    this.router.navigate(['/home/project']);
  }

}
