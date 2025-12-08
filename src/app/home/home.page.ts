import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {heart, settings} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonButtons],
})
export class HomePage {
  constructor(private router: Router) {
    addIcons({heart, settings});
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }

  goToSettings(){
    this.router.navigate(['/settings'])
  }
}
