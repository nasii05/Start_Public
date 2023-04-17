import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    planCard = [
      {planlevel:"Basic",price:"$100"},
      {planlevel:"Plus",price:"$250"},
      {planlevel:"Pro",price:"$400"}
    ]

    count = [{},{},{},{},{}]
}
