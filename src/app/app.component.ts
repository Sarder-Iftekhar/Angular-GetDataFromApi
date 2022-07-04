import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'getDataFromApi';
  users:any;
  constructor(private userData:UserDataService)
  {
    //store in users
    // this.userData.users().subscribe((data)=>{
    //   this.users=data;
    // })

    this.userData.users().subscribe((data)=>{
      this.users=data;

    })
  }

}
