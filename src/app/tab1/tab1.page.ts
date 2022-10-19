/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { Time } from '@angular/common';
import { TransactionType } from '../shared/models';
import { ModalController } from '@ionic/angular';
import { AddTransactionsModalComponent } from '../add-transactions-modal/add-transactions-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddTransactionsModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

  transactions = [
    {
      icon: 'fast-food-outline',
      date: Date.now(),
      title: 'Burger',
      cost: 10,
      type: TransactionType.EXPENSE
    },

    {
      icon: 'fast-food-outline',
      date: Date.now(),
      title: 'Cola',
      cost: 2,
      type: TransactionType.INCOME
    },

    {
      icon: 'fast-food-outline',
      date: Date.now(),
      title: 'Donut',
      cost: 5,
      type: TransactionType.EXPENSE
    },

    {
      icon: 'fast-food-outline',
      date: Date.now(),
      title: 'Chips',
      cost: 7,
      type: TransactionType.EXPENSE
    },

    {
      icon: 'fast-food-outline',
      date: Date.now(),
      title: 'Fanta',
      cost: 5,
      type: TransactionType.EXPENSE
    }

  ]

}
