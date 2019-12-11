import { Component, OnInit } from '@angular/core';
import {Cover} from '../../../shared/modules/cover';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CoverService} from '../../../shared/services/cover.service';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-covers-details',
  templateUrl: './covers-details.component.html',
  styleUrls: ['./covers-details.component.css']
})
export class CoversDetailsComponent implements OnInit {
  cover: Cover;
  id: number;
  coverForm = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    name: new FormControl({value: '', disabled: true}),
    brand: new FormControl({value: '', disabled: true}),
    model: new FormControl({value: '', disabled: true}),
    color: new FormControl({value: '', disabled: true}),
    mats: new FormControl({value: '', disabled: true}),
    price: new FormControl({value: '', disabled: true}),
    stock: new FormControl({value: '', disabled: true})
  });
  constructor(private route: ActivatedRoute,
              private coverService: CoverService,
              private cartService: CartService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.coverService.getCoverById(this.id)
      .subscribe(coverFromRest => {
        this.cover = coverFromRest;
        this.coverForm.patchValue({
          id: coverFromRest.id,
          name: coverFromRest.name,
          brand: coverFromRest.typeOfBrand,
          model: coverFromRest.typeOfModel,
          color: coverFromRest.color,
          mats: coverFromRest.material,
          price: coverFromRest.price,
          stock: coverFromRest.stock
        });
      });
  }

  addToBasket() {
    this.cartService.addToBasket(this.cover);
  }
}
