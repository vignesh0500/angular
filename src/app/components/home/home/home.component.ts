import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(public auth:AuthService) {}
  user={localId:"someid",displayName:"somename"};
  ngOnInit():void{
  this.auth.canAccess();
  if(this.auth.isAuthenticated()){
    this.auth.detail().subscribe({
      next:data=>{
        this.user.localId =data.users[0].localId;
        this.user.displayName=data.users[0].displayName;
      }
    })
  }
  }
}
