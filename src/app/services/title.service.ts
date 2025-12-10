import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  //Default title is student number, BehaviorSubject is a shared variable that lets subscribes update or get the latest value
  private titleSource = new BehaviorSubject<string>('G00438844');

  //Avoids direct access, only service can update, componenets can only subscribe
  currentTitle = this.titleSource.asObservable();

  //Takes the title from the init methods of each page and sets it, for automatically updating page title
  setTitle(title: string){
    this.titleSource.next(title);
  }
  
}
