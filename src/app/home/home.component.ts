import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  constructor(private prmotionservice:PromotionService,
    private dishsevice:DishService) { }

  ngOnInit(): void {
    this.dish = this.dishsevice.geetFeaturedDish();
    this.promotion = this.prmotionservice.getFeaturedPromotion();
  }

}
