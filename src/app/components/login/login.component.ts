import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formdata={email:"",password:""};
  submit=false;
  errorMessage="";
constructor(private auth:AuthService){}
ngOnInit(): void{
  this.auth.canAuthenticate();
}
onSubmit(){
  console.log(this.formdata)
  this.auth.login(this.formdata.email,this.formdata.password)
  .subscribe({
    next:data=>{
      this.auth.storeToken(data.idToken);
      this.auth.canAuthenticate();
    },
    error:data=>{
      if(data.error.error.message=="INVALID_PASSWORD"||data.error.error.message=="INVALID_EMAIL"){
        this.errorMessage="Invalid Credentils"
      }else{
        this.errorMessage=" Unknown error  when logging into this account"
      }
      }
  }).add(()=>{
  console.log("logging compleye")
  })
}

}
