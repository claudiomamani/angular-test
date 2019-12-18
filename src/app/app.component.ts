import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  circles = [
    { id: "1", active: true },
    { id: "2", active: null },
    { id: "3", active: null },
    { id: "4", active: null },
  ];
  lastSelected = 0;

  constructor() {}

  changePosition(circle) {
    const currentIndex = this.getCurrentCircleIndex(circle);
    this.circles[currentIndex].active = true;
    this.circles[this.lastSelected].active = false;
    this.lastSelected = currentIndex;
  }
  getCurrentCircleIndex(circle) {
    let currentIndex;
    this.circles.forEach((circleValue, index, circles) => {
      if (circleValue.id == circle.id) {
        currentIndex = index;
      } else {
        circles[index].active = null;
      }
    });
    return currentIndex;
  }
}