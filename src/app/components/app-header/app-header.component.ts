import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {heart, settings} from 'ionicons/icons';



@Component({
  selector: 'app-app-header',
  standalone: true,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, IonButtons],
})
export class AppHeaderComponent  implements OnInit {

  constructor(private router: Router) {
    addIcons({heart, settings});
   }

  title: string = "G00348844"; //Default title

  ngOnInit() {
    if(this.router.url === '/favourites'){
      this.title = "Favourites";
    }
    else if(this.router.url === '/settings'){
      this.title = "Settings";
    }else if(this.router.url === '/recipe-details'){
      this.title = "Recipe Details";
    }
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }

  goToSettings(){
    this.router.navigate(['/settings'])
  }

}
