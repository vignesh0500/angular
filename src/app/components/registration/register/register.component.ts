
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
 formdata ={name:"",email:"",password:""};
 submit=false;
 errorMessage="";
   constructor(private auth:AuthService ){}
   ngOnInit(): void{
    this.auth.canAuthenticate();
   }
   onsubmit(){
// console.log(this.formdata);
this.auth.register(this.formdata.name,this.formdata.email,this.formdata.password)
.subscribe({
  next:data=>{
    //store token from responnse 
    this.auth.storeToken(data.idToken);
    // console.log("registered id token is "+data.idToken)
    this.auth.canAuthenticate();
  },
  error:data=>{
    if(data.error.error.messge=="INVALID_EMAIL"){
      this.errorMessage = "Invalid Email"
    }
    else if(data.error.error.message == "EMAIL_EXISTS"){
this.errorMessage ="Already Email Exitts"
    }
    else{
      this.errorMessage ="Unknown error occured when creating this account"
    }
  }
}).add(() => {
  console.log("register completed")
})
   } 
}
