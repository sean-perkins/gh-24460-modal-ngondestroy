import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalExampleComponent implements OnDestroy {

  constructor(private modalCtrl: ModalController) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
    console.log('[app-modal-example] ngOnDestroy');
  }

}
