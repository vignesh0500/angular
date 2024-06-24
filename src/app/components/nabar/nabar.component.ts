import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nabar',
  templateUrl:'./nabar.component.html',
  styleUrls: ['./nabar.component.scss']
})
export class NabarComponent implements OnInit{
constructor(public auth:AuthService) {}
ngOnInit():void{

}
logout(){
  this.auth.removeToken();
  this.auth.canAccess();
}
}
