import { Injectable, NotFoundException } from '@nestjs/common';

export interface Location{
  lat:number,
  long:number
}
export interface Event{
  id:number
  startDate:Date
  endDate:Date
  location:Location
  eventName:string
  organiszerName:string
  availablePeople:number
  joinedPeopleNumber:number
  timestamp:number
}

var userLoc:Location={
  lat:22.319237399968028,
  long: 114.16940435293854
}

var eventData:Event[] = [
  {
    id:0,
    startDate:new Date("2021-04-20T12:00:00.000Z"),
    endDate:new Date("2021-04-20T15:00:00.000Z"),
    location:{
      lat:22.317989210512845,
      long:114.16872550357074
    },
    eventName:"Cinema City Movie",
    organiszerName:"cinemacity",
    availablePeople:40,
    joinedPeopleNumber:10,
    timestamp:Date.parse("2021-04-20T12:00:00.000Z"),
  },
  {
    id:1,
    startDate:new Date("2021-04-14T13:00:00.000Z"),
    endDate:new Date("2021-04-14T15:00:00.000Z"),
    location:  {
      lat:22.32539888416795,
      long:114.17200269733979
    },
    eventName:"Mong Kok Flower Market",
    organiszerName:"Shop Organsizer",
    availablePeople:30,
    joinedPeopleNumber:0,
    timestamp:Date.parse("2021-04-14T13:00:00.000Z"),
  },
  {
    id:2,
    startDate:new Date("2021-04-17T12:00:00.000Z"),
    endDate:new Date("2021-04-17T15:00:00.000Z"),
    location:{
      lat:22.338944549842104,
      long:114.14493389441907
    },
    eventName: "Butterfly Valley Road Pet Garden",
    organiszerName:"Leisure and Cultural Services GOV",
    availablePeople:30,
    joinedPeopleNumber:0,
    timestamp:Date.parse("2021-04-17T12:00:00.000Z"),
  }
]


export interface FoundEvent{
  event:Event
  distance:number
  remainQuata:number
}



// addEvent(
//   "2021-04-16T13:00:00",
//   "2021-04-16T15:00:00",
//   {
//     lat:22.302026557871528,
//     long:114.17038697783491
//   },
//   "Kowloon Park show",
//   "GOV",
//   30
// )

// console.log("availableEvent 1", availableEvent("2021-04-15T13:00:00",userLoc,1,1))
// console.log("availableEvent -1", availableEvent("2021-04-15T13:00:00",userLoc,1,-1))
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEvents(){
    return eventData
  }

  findAvailableEvent(startTime:string | Date, location:Location, numberOfPeople:number, maxDistKm:number){
    let userStartTime = new Date(startTime)
    
    var R_data:FoundEvent[] = [];
    for (var i = 0; i < eventData.length; i++) {
      let distance = this.getDistanceFromLatLonInKm(location,eventData[i].location)
      if (userStartTime.getTime() <= eventData[i].timestamp && (eventData[i].availablePeople-eventData[i].joinedPeopleNumber) >= numberOfPeople)
      {
        if (maxDistKm == -1 || (distance <= maxDistKm)){
          R_data.push({
            event:eventData[i],
            distance,
            remainQuata:eventData[i].availablePeople - eventData[i].joinedPeopleNumber
          })
        }
      }
    }
    return R_data
  }

  addEvent(startDateStr:string|Date,endDateStr:string|Date,location:Location,eventName:string,organiszerName:string,maxPeople:number){
    let startDate = new Date(startDateStr)
    let endDate = new Date(endDateStr)
    let newEvent:Event =   {
      id:eventData[eventData.length - 1].id + 1,
      startDate,
      endDate,
      location,
      eventName,
      organiszerName,
      availablePeople:maxPeople,
      joinedPeopleNumber:0,
      timestamp:startDate.getTime(),
    }
    eventData.push(newEvent);
    return newEvent
  }
  deg2rad(deg:number) {
    return deg * (Math.PI/180)
  }
  getDistanceFromLatLonInKm(location1:Location,location2:Location) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(location2.lat-location1.lat);  // deg2rad below
    var dLon = this.deg2rad(location2.long-location2.long); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(location1.lat)) * Math.cos(this.deg2rad(location2.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }


}
