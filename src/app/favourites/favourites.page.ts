import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonContent, CommonModule, FormsModule, AppHeaderComponent, IonButton, RouterLink]
})
export class FavouritesPage implements OnInit {

  constructor() { 
    addIcons({ arrowBack });
  }

  ngOnInit() {
  }

}
