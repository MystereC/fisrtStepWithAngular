import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts: number=0;
 

  constructor() { }

  ngOnInit() {
  }

  ifLoveIt() {
    this.loveIts++;
    console.log(this.loveIts);
  }
  ifDontLoveIts() {
    this.loveIts--;
    console.log(this.loveIts);
  }

  
  


}
