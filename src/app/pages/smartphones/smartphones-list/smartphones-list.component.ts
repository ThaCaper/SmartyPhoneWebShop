import { Component, OnInit } from '@angular/core';
import {SmartPhone} from '../../../shared/modules/smartPhone';
import {SmartphoneService} from '../../../shared/services/smartphone.service';

@Component({
  selector: 'app-smartphones-list',
  templateUrl: './smartphones-list.component.html',
  styleUrls: ['./smartphones-list.component.css']
})
export class SmartPhonesListComponent implements OnInit {
  smart: SmartPhone[];
  loading: boolean;
  constructor(private smartPhoneService: SmartphoneService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.smartPhoneService.getSmartPhones().subscribe(smartPhones => {
      this.smart = smartPhones;
      this.loading = false;
    });
  }
}
