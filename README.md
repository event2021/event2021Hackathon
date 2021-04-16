
## API CALL
https://www.getpostman.com/collections/416e18bb5bdb4b0405dd



### API GET localhost:3000/events
```
[
    {
        "id": 0,
        "startDate": "2021-04-20T12:00:00.000Z",
        "endDate": "2021-04-20T15:00:00.000Z",
        "location": {
            "lat": 22.317989210512845,
            "long": 114.16872550357074
        },
        "eventName": "Cinema City Movie",
        "organiszerName": "cinemacity",
        "availablePeople": 40,
        "joinedPeopleNumber": 10,
        "timestamp": 1618920000000
    },
    {
        "id": 1,
        "startDate": "2021-04-14T13:00:00.000Z",
        "endDate": "2021-04-14T15:00:00.000Z",
        "location": {
            "lat": 22.32539888416795,
            "long": 114.17200269733979
        },
        "eventName": "Mong Kok Flower Market",
        "organiszerName": "Shop Organsizer",
        "availablePeople": 30,
        "joinedPeopleNumber": 0,
        "timestamp": 1618405200000
    },
    {
        "id": 2,
        "startDate": "2021-04-17T12:00:00.000Z",
        "endDate": "2021-04-17T15:00:00.000Z",
        "location": {
            "lat": 22.338944549842104,
            "long": 114.14493389441907
        },
        "eventName": "Butterfly Valley Road Pet Garden",
        "organiszerName": "Leisure and Cultural Services GOV",
        "availablePeople": 30,
        "joinedPeopleNumber": 0,
        "timestamp": 1618660800000
    }
]
```

### API POST localhost:3000/addEvent
body
```
{
    "startTime":"2021-04-16T13:00:00",
    "endTime":"2021-04-16T15:00:00",
    "lat":22.302026557871528,
    "long":114.17038697783491,
    "eventName":"Kowloon Park show",
    "organiszerName":"GOV",
    "maxPeople":30
}
```
result 
```
{
    "id": 3,
    "startDate": "2021-04-16T05:00:00.000Z",
    "endDate": "2021-04-16T07:00:00.000Z",
    "location": {
        "lat": 22.302026557871528,
        "long": 114.17038697783491
    },
    "eventName": "Kowloon Park show",
    "organiszerName": "GOV",
    "availablePeople": 30,
    "joinedPeopleNumber": 0,
    "timestamp": 1618549200000
}
```
### findAvailableEvent no distance limit
### API GET localhost:3000/findAvailableEvent?startTime=2021-04-15T13:00:00&lat=22.319237399968028&long=114.16940435293854&numberOfPeople=1&maxDistKm=-1

result
```
[
    {
        "event": {
            "id": 0,
            "startDate": "2021-04-20T12:00:00.000Z",
            "endDate": "2021-04-20T15:00:00.000Z",
            "location": {
                "lat": 22.317989210512845,
                "long": 114.16872550357074
            },
            "eventName": "Cinema City Movie",
            "organiszerName": "cinemacity",
            "availablePeople": 40,
            "joinedPeopleNumber": 10,
            "timestamp": 1618920000000
        },
        "distance": 0.13879233490753748,
        "remainQuata": 30
    },
    {
        "event": {
            "id": 2,
            "startDate": "2021-04-17T12:00:00.000Z",
            "endDate": "2021-04-17T15:00:00.000Z",
            "location": {
                "lat": 22.338944549842104,
                "long": 114.14493389441907
            },
            "eventName": "Butterfly Valley Road Pet Garden",
            "organiszerName": "Leisure and Cultural Services GOV",
            "availablePeople": 30,
            "joinedPeopleNumber": 0,
            "timestamp": 1618660800000
        },
        "distance": 2.1913350846212256,
        "remainQuata": 30
    }
]
```

### findAvailableEvent within 2km
### API GET localhost:3000/findAvailableEvent?startTime=2021-04-15T13:00:00&lat=22.319237399968028&long=114.16940435293854&numberOfPeople=1&maxDistKm=2

result
```
[
    {
        "event": {
            "id": 0,
            "startDate": "2021-04-20T12:00:00.000Z",
            "endDate": "2021-04-20T15:00:00.000Z",
            "location": {
                "lat": 22.317989210512845,
                "long": 114.16872550357074
            },
            "eventName": "Cinema City Movie",
            "organiszerName": "cinemacity",
            "availablePeople": 40,
            "joinedPeopleNumber": 10,
            "timestamp": 1618920000000
        },
        "distance": 0.13879233490753748,
        "remainQuata": 30
    },
    {
        "event": {
            "id": 3,
            "startDate": "2021-04-16T05:00:00.000Z",
            "endDate": "2021-04-16T07:00:00.000Z",
            "location": {
                "lat": 22.302026557871528,
                "long": 114.17038697783491
            },
            "eventName": "Kowloon Park show",
            "organiszerName": "GOV",
            "availablePeople": 30,
            "joinedPeopleNumber": 0,
            "timestamp": 1618549200000
        },
        "distance": 1.9137583244113556,
        "remainQuata": 30
    }
]
```

### test data (user location)
```
var userLoc:Location={
  lat:22.319237399968028,
  long: 114.16940435293854
}

```

### test data (events)
```
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
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

