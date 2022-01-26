import { Component, OnInit } from '@angular/core';
import { Word } from '../shared/word';
import { WORDS } from '../shared/moc-words';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  trans: boolean = true  

  words: Word[] = WORDS;
  randomW: any;
  word!: any; 
  translation!:any;

  constructor() { }

  ngOnInit(): void {
    this.randomWord();
  }

  translate() {
   return this.trans = !this.trans
  }

  randomWord() {
   const randomIndex = Math.floor(Math.random() * this.words.length);
   this.randomW = this.words[randomIndex];
   this.word = this.randomW.word
   this.translation = this.randomW.translation
   this.trans = true  
  }

}
