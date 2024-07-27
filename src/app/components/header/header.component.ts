import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public fullName: string = '';
  public role!: string;
  isSearchVisible = false;
  constructor(
    private authService: AuthService,
    private userDetails: UserDetailsService
  ) {}
  ngOnInit() {
    this.userDetails.getFullName().subscribe((val) => {
      const fullNameFromToken = this.authService.getFullNameFromToken();
      this.fullName = val || fullNameFromToken;
    });

    this.userDetails.getRole().subscribe((val) => {
      const roleFromToken = this.authService.getRoleFromToken();
      this.role = val || roleFromToken;
    });
  }

  toggleSearch() {
    console.log(this.isSearchVisible);
    this.isSearchVisible = !this.isSearchVisible;
  }

  signOut() {
    this.authService.signOutUser();
  }

  isLoggedCheck() {
    return !!this.authService.isLoggedIn();
  }
}
