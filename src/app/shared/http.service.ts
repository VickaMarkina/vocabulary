import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './word';
import { WORDS } from './moc-words';

const url = 'https://vocabulary-51156-default-rtdb.europe-west1.firebasedatabase.app/Words';
const httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  words: Word[] = []

  constructor(private httpClient: HttpClient) { }

  createData(word: Word): void {
       this.httpClient.post<Word>(`${url}.json`, word, httpOptions).subscribe(res => {  
        this.words.push({...{key: res.key}, ...word})
       })
  }

  getData(): void {
    this.httpClient.get<Word[]>(`${url}.json`, httpOptions).subscribe
    (res => { Object.keys(res).forEach((key: any) => {this.words.push({key, ...res[key]})})})
  }
}
