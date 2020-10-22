import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-own-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'This is custom angular element and can be rendered anywhere';
  currentComment: string = '';
  comments: string[] = [];

  ngOnInit() {
    this.comments.push('Interesantna biblioteka.');
    this.comments.push('Probao sam je i veoma je jednostavna.');
    this.comments.push('Izuzetno korisno!');
  }

  addComment(comment: string) {
    this.comments.push(comment);
  }
}
