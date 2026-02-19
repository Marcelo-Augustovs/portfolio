import { Component } from '@angular/core';
import { TechIconsComponent } from "../tech-icons/tech-icons.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [TechIconsComponent]
})
export class HomeComponent {

}
