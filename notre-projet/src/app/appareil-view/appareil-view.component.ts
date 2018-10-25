import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;
  appareils : any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }


  posts =[{
    titlePost:'Post1 ',
    contentPost:' je suis un super heros  , et je vais detruire la planete des méchants'
  },
  {
    titlePost:'Post2 ',
    contentPost:'  toto est devenue le meilleur élèves de sa classe'
  },
  {
    titlePost:'Post3 ',
    contentPost:'la vie c est pas le lait'
  }];

  

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
onEteindre() {
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilService.switchOffAll();
  } else {
    return null;
  }
}

ngOnDestroy() {
  this.appareilSubscription.unsubscribe();
}

}
