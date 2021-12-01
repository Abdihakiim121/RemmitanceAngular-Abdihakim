import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,private route: Router) {}
islogin: any
  ngOnInit(): void {
this.islogin = this.authService.isUserLogin()
  }
  logout(){
    this.authService.logout();
    // this.route.navigateByUrl('/login')
    window.location.href = "/login"
  }

}
