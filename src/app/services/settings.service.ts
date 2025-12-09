import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {

  private storageDatabase: Storage | null = null;
  defaultUnit = 'metric';

  constructor(private storage: Storage){
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this.storageDatabase = storage;
  }

  async setUnit(unit: string){
    await this.storageDatabase?.set('unit', unit);
  }

  async getUnit(): Promise<string> {
    const value = await this.storageDatabase?.get('unit');
    return value || this.defaultUnit; //if nothing is saved return default unit
  }
  

}
