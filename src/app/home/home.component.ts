import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Business } from '../business';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  businessModel = new Business('');


 // Setting service for the component
  directories: Object;
  searchResult: Object;

  constructor(private data: DataService) {

  }

  onSubmit() {
    this.data.serarchDirectories(this.businessModel).subscribe(data => {
        this.searchResult = data;
        console.log(this.searchResult);
      }
    );
  }


  ngOnInit() {
    this.data.getDirectories().subscribe(data => {
        this.directories = data;
        console.log(this.directories);
      }
    );

  }

}


