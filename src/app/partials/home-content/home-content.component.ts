import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  teamMembers = [
    {
     profile:"../../assets/images/team-member-1.png",
     name:"Per Legge",
     position:"CEO"
    },
    {
     profile:"../../assets/images/team-member-2.png",
     name:"Richard Guerra",
     position:"CTO"
    },
    {
     profile:"../../assets/images/team-member-3.png",
     name:"Alexandra Stolz",
     position:"Designer"
    },
    {
     profile:"../../assets/images/team-member-4.png",
     name:"Janet Bray",
     position:"Developer"
    },
  ]
}
