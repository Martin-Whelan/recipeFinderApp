import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonContent,  CommonModule, FormsModule, AppHeaderComponent, RouterLink]
})
export class RecipeDetailsPage implements OnInit {

  constructor() {
    addIcons({ arrowBack });
   }

  ngOnInit() {
  }

}
