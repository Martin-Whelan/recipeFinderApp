import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButtons } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { TitleService } from '../services/title.service';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonContent, CommonModule, FormsModule, AppHeaderComponent, IonButton, RouterLink]
})
export class FavouritesPage implements OnInit {


  favourites: any[] = [];


  constructor(
    private titleService: TitleService,
    private favouriteService: FavouritesService,
    private router: Router
  ) { 
    addIcons({ arrowBack });
    }

  async ngOnInit() {
    this.titleService.setTitle('Favourites');
    this.favourites = await this.favouriteService.getFavourites();
  }
  //Get the recipe id and go to the details page - adding on the id at the end
  viewDetails(id: number) {
    this.router.navigate(['/recipe-details', id]);
  }
  //Jump to the shopping list, but generate it first
  async goToShoppingList() {
    await this.favouriteService.generateShoppingList();
    this.router.navigate(['/shopping-list']);
  }

}
