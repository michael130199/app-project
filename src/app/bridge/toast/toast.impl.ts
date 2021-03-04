import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { IToastImpl } from 'src/app/bridge/contracts/toast.interface';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToastImpl implements IToastImpl {

  constructor(private readonly toastController: ToastController,
              private readonly translate: TranslateService) { }

  public async presentGeneralError(): Promise<void> {

    const toast: HTMLIonToastElement = await this.toastController.create({
      header: this.translate.instant('GENERAL_ERROR_HEADER'),
      message: this.translate.instant('GENERAL_ERROR_CONTENT'),
      position: 'top',
      color: 'dark',
      keyboardClose: true,
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'sad'
        }
      ]
    });

    toast.present();
  }

  public async presentError(msg: string): Promise<void> {

    const toast: HTMLIonToastElement = await this.toastController.create({
      message: this.translate.instant(msg),
      position: 'top',
      color: 'dark',
      keyboardClose: true,
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'sad'
        }
      ]
    });

    toast.present();
  }

  public async presentWarning(msg: string): Promise<void> {

    const toast: HTMLIonToastElement = await this.toastController.create({
      message: msg,
      position: 'top',
      color: 'dark',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'sad'
        }
      ]
    });
    toast.present();
  }

  public async presentSuccess(msg: string): Promise<void> {

    const toast: HTMLIonToastElement = await this.toastController.create({
      message: msg,
      position: 'top',
      color: 'success',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'happy'
        }
      ]
    });
    toast.present();
  }

  public dismiss(): void {

    this.toastController.dismiss();
  }
}
