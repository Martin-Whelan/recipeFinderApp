import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { TitleService } from '../services/title.service';
import { IonContent, IonButtons, IonIcon, IonButton, IonCheckbox, IonItem, IonLabel } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack, trash } from 'ionicons/icons';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonLabel, IonItem, IonButton, IonIcon, IonButtons, IonContent, CommonModule, FormsModule, AppHeaderComponent, IonCheckbox]
})
export class ShoppingListPage implements OnInit {
  shoppingList: any[] = [];

  constructor(
    private storage: Storage,
    private titleService: TitleService
    ) 
    { 
      addIcons({ arrowBack, trash });
    }

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewWillEnter() {
    this.titleService.setTitle("Shopping List")
    this.shoppingList = await this.storage.get('shoppingList') || [];
  }


  async saveList(){
    await this.storage.set('shoppingList', this.shoppingList);
  }

  //Take in the index from the shopping list array (passed from button) and remove it, then autosave
  async removeItem(index:number){
    this.shoppingList.splice(index, 1);
    await this.storage.set('shoppingList', this.shoppingList);
  }

  //For each item that is true on item.checked, filter them out, then assign to shoppingList and save
  async clearCheckedItems() {
    this.shoppingList = this.shoppingList.filter(item => !item.checked);
    await this.storage.set('shoppingList', this.shoppingList);
  }
}
