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
  constructor(private route: ActivatedRoute,
              private coverService: CoverService,
              private cartService: CartService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.coverService.getCoverById(this.id)
      .subscribe(coverFromRest => {
        this.cover = coverFromRest;
      });
  }
  addToBasket() {
    this.cartService.addToBasket(this.cover);
  }
}
