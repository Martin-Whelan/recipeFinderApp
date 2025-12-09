import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonContent, CommonModule, FormsModule, AppHeaderComponent,RouterLink]
})
export class SettingsPage implements OnInit {

  constructor() {
    addIcons({ arrowBack });
   }

  ngOnInit() {
  }

}
