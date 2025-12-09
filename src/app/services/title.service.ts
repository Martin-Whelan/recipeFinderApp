import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleSource = new BehaviorSubject<string>('G00438844');

  currentTitle = this.titleSource.asObservable();

  setTitle(title: string){
    this.titleSource.next(title);
  }
  
}
