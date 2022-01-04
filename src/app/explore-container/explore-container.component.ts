import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from '../modal-example';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent
    });
    await modal.present();
    await modal.onDidDismiss();
    console.log('[modal] didDismiss');
  }

}
