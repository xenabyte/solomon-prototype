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

  imageUrl = 'http://167.99.57.223/admin/public/images/business_images/'; // 167.99.57.223/admin/public

  public businessModel = {
    business: null
  };


 // Setting service for the component
  directories: Object;
  searchResults: Object;

  constructor(private data: DataService) {

  }

  public loading: Boolean;


  onSubmit() {
    if (this.businessModel.business) {
      this.loading = true;
      console.log(this.businessModel.business);
        this.data.searchDirectories(this.businessModel.business).subscribe(data => {
          this.searchResults = data;
          if (data !== '') {
            this.loading = false;
            this.businessModel.business = '';
            console.log(this.searchResults);
          }
          this.loading = false;
        }
      );
    }
  }


  ngOnInit() {
    this.data.getDirectories().subscribe(data => {
        this.directories = data;
        console.log(this.directories);
      }
    );
  }

}


