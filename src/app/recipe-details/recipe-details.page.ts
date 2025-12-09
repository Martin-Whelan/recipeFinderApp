import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleService } from '../services/title.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService
  ) {
    addIcons({ arrowBack });
   }

  ngOnInit() {
    this.titleService.setTitle('Recipe Details');
    const id = this.route.snapshot.paramMap.get('id');
    console.log("Recipes ID: ", id)
  }

}
