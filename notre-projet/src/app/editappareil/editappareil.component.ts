import { Router } from '@angular/router';
import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editappareil',
  templateUrl: './editappareil.component.html',
  styleUrls: ['./editappareil.component.scss']
})
export class EditappareilComponent implements OnInit {

    defaultOnOff = 'éteint';
    constructor(private appareilService: AppareilService,
      private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }



}
