import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButtons, IonButton, IonIcon, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { TitleService } from '../services/title.service';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonContent, IonButton, CommonModule, FormsModule, AppHeaderComponent, RouterLink, IonIcon, IonButtons]
})
export class SettingsPage implements OnInit {

  selectedUnit: string = 'metric';

  constructor(
    private titleService: TitleService,
    private settingsService: SettingsService,
  ) {
    addIcons({ arrowBack });
   }
  ngOnInit(): void {
    
  }

  //Read the current unit and also set the title on view enter
  async ionViewWillEnter(){
    this.titleService.setTitle("Settings");
    this.selectedUnit = await this.settingsService.getUnit();
  }
  //Change the unit and update it in the service also
  async onUnitChange(unit: string){
    this.selectedUnit = unit;
    await this.settingsService.setUnit(unit);
  }
  
}
