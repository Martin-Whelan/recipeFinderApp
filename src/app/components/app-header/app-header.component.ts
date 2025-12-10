import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';
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
  pageTitle: string = "G00348844"; //Default title

  constructor(
    private router: Router,
    private titleService: TitleService
  ) {
    addIcons({heart, settings});
    }

  
  
  ngOnInit() {
    this.titleService.currentTitle.subscribe(title => {
      this.pageTitle = title;
    })
  }

  goToFavourites(){
    this.router.navigate(['/favourites']);
  }

  goToSettings(){
    this.router.navigate(['/settings'])
  }

}
