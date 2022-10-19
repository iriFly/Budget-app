import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-transactions-modal',
  templateUrl: './add-transactions-modal.component.html',
  styleUrls: ['./add-transactions-modal.component.css']
})
export class AddTransactionsModalComponent implements OnInit {

  formData = {
    icon: '',
    date: '',
    title: '',
    cost: '',
    type: ''
  };

  formInputs = [
    {
      label: 'Item',
      type: 'text',
      model: this.formData.title
    },

    {
      label: 'Total',
      type: 'number',
      model: this.formData.cost
    },

    {
      label: 'Date',
      type: 'date',
      model: this.formData.date
    }
  ];


  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }
  }
