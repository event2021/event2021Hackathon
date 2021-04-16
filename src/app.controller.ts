import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { max } from 'class-validator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/events')
  getEvents(){
    return this.appService.getEvents()
  }

  @Get('/findAvailableEvent')
  findAvailableEvent(
    @Query('startTime')startTime:Date,
    @Query('lat') lat:number,
    @Query('long') long:number,
    @Query('numberOfPeople') numberOfPeople:number,
    @Query('maxDistKm') maxDistKm:number,
  ){
    return this.appService.findAvailableEvent(startTime, {lat,long}, numberOfPeople, maxDistKm)
  }

  @Post('/addEvent')
  addEvent(
    @Body('startTime')startTime:Date,
    @Body('endTime')endTime:Date,
    @Body('lat') lat:number,
    @Body('long') long:number,
    @Body('eventName') eventName:string,
    @Body('organiszerName') organiszerName:string,
    @Body('maxPeople') maxPeople:number,
  ){
    return this.appService.addEvent(
      startTime,
      endTime,
      {
        lat,
        long,
      },
      eventName,
      organiszerName,
      maxPeople
    )
  }
  // addEvent(startDateStr:string|Date,endDateStr:string|Date,location:Location,eventName:string,organiszerName:string,maxPeople:number){

}
