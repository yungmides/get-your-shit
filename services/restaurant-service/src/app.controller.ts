import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateRestaurantDto } from './dto/createRestaurant.dto';
import { UpdateRestaurantDto } from './dto/updateRestaurant.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { CreateCategoryProductDto } from './dto/createCategoryProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { UpdateCategoryProductDto } from './dto/updateCategoryProduct.dto';
import { StripeService } from './stripe.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('restaurant-service:create')
  create(data: CreateRestaurantDto) {
    return this.appService.create(data);
  }

  @MessagePattern('restaurant-service:update')
  update(data: UpdateRestaurantDto) {
    return this.appService.update(data);
  }


  @MessagePattern('restaurant-service:getById')
  getById(id: string) {
    return this.appService.getById(id);
  }
 
  @MessagePattern('restaurant-service:get')
  getRestaurant() {
    return this.appService.getRestaurant();
  }

  @MessagePattern('restaurant-service:getByUserId')
  getByUserId(id: string) {
    return this.appService.getByUserId(id);
  }

  @MessagePattern('restaurant-service:delete')
  delete(id: string) {
    return this.appService.delete(id);
  }

  @MessagePattern('restaurant-service:createProduct')
  createProduct(data: CreateProductDto) {
    return this.appService.createProduct(data);
  }

  @MessagePattern('restaurant-service:getProducts')
  getProducts() {
    return this.appService.getProducts();
  }

  @MessagePattern('restaurant-service:updateProduct')
  updateProduct(data: UpdateProductDto) {
    return this.appService.updateProduct(data);
  }

  @MessagePattern('restaurant-service:deleteProduct') 
  deleteProduct(id: string) {
    return this.appService.deleteProduct(id);
  }

  @MessagePattern('restaurant-service:getProductById')
  getProductById(id: string) {
    return this.appService.getProductById(id);
  }
  @MessagePattern('restaurant-service:getProductByPriceId')
  getProductByPriceID(id: string) {
    return this.appService.getProductByPriceId(id);
  }

  @MessagePattern('restaurant-service:createCategoryProduct')
  createCategoryProduct(data: CreateCategoryProductDto) {
    return this.appService.createCategoryProduct(data);
  }

  @MessagePattern('restaurant-service:getCategoriesProduct')
  getCategoriesProduct() {
    return this.appService.getCategoryProduct();
  }

  @MessagePattern('restaurant-service:getCategoryProductById')
  getCategoryProductById(id: string) {
    return this.appService.getCategoryProductById(id);
  }

  @MessagePattern('restaurant-service:updateCategoryProduct')
  updateCategoryProduct(data: UpdateCategoryProductDto) {
    return this.appService.updateCategoryProduct(data);
  }
  
}
