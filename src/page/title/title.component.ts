import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  title: string = 'Meu Blog';
  imagemTitle: string =
    'https://thumbs.dreamstime.com/b/roda-do-navio-7732905.jpg';

  constructor() {}

  ngOnInit() {}
}
