import { Injectable } from '@angular/core';
//in service we have to call api
//so we have to import httpclient
//here hhtpClient is a class
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  //store api url in a variable
  url='https://api.agify.io/?name=bella'

  constructor(private http:HttpClient) { }

  //lets create a function, this function call or api

  users()
  {
    //inside the get we pass our api url
    return this.http.get(this.url)
  }
  //next we have to call http client module
  //inside our app.module.ts
}
