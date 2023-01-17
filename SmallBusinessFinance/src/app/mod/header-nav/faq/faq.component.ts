import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  constructor(){}
  ngOnInit()
  {
  let answers = document.querySelectorAll(".accordion");
  answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
    event.classList.remove("active");
    } else {
    event.classList.add("active");
    }
  });
  });
  }
}
