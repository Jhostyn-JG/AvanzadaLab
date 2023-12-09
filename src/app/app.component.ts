import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentes';

  counterProgress:number = 0;
  totalCountdown:number = 15;


  updateProgress($event:number) {
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown * 100;
  }
  countdownFinished(){
    console.log("El conteo Finalizó");
  }

}
