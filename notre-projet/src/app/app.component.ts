import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  secondes: number=0;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter$ = interval(1000);

    this.counterSubscription = counter$.subscribe(
      (value:number) => {
        this.secondes = value;
      },
      (error:any) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
}
}
