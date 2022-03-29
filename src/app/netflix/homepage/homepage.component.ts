import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  buttonName="Sign In"
  heading="Unlimited movies, TV shows and more."
  subheading="Watch anywhere. Cancel anytime."
  message="Ready to watch? Enter your email to create or restart your membership."
  ngOnInit() {
    
  }
 
}