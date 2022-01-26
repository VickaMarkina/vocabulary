import { Component, OnInit } from '@angular/core';
import { Word } from '../shared/word';
import { HttpService } from '../shared/http.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  trans: boolean = true  

  randomW: any;
  words: Word[] = this.httpService.words;
  word: string = 'Kliknij przycisk aktualizacji'; 
  translation:string = 'Нажми на кнопку обновить';

  form = this.fb.group({
    word: ['', [Validators.required]],
    translation: ['', [Validators.required]],
  })
 
  constructor(public httpService: HttpService, private fb: FormBuilder) { }
  
  ngOnInit(): void {    
    this.httpService.getData()
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

  onSubmit(event: any){
    this.httpService.createData(this.form.value)

    const e = event;
    e.target.disabled = true;
    setTimeout(() => {return e.target.disabled = false
    },2000)
  }

}
