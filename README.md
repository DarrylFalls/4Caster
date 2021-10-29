# 4Caster

## Description:

4Caster is a weather app designed to let you save a list of your favorite locations

## Wireframes:

https://whimsical.com/weather-app-7jzmNrXKrRfJhJTYVwJaq4

## Component Hierarchy:

https://whimsical.com/5eqKh3PCh2BaRvoL2fEpZq

## API:
  - Airtable will be used to create accounts and store a favorites list of locations
  - Airtable API: https://api.airtable.com/v0/app4ZMuiUaRsyIY94/Table%201?api_key=[key]

  ```
  "records": [
        {
            "id": "rec2xm7cCRm9DRX49",
            "fields": {
                "favorites": [
                    "Raleigh",
                    "New York",
                    "Roanoke",
                    "London"
                ],
                "username": "DarrylFallsDown",
                "password": "password"
            },
            "createdTime": "2021-10-21T19:05:38.000Z"
        }
    ]
  ```

  - Mapquest API: http://www.mapquestapi.com/geocoding/v1/address?key=[key]&location=[location]

  ```
   "locations": [
      {
        "street": "",
        "adminArea6": "",
        "adminArea6Type": "Neighborhood",
        "adminArea5": "London",
        "adminArea5Type": "City",
        "adminArea4": "Westminster",
        "adminArea4Type": "County",
        "adminArea3": "",
        "adminArea3Type": "State",
        "adminArea1": "GB",
        "adminArea1Type": "Country",
        "postalCode": "",
        "geocodeQualityCode": "A5XAX",
        "geocodeQuality": "CITY",
        "dragPoint": false,
        "sideOfStreet": "N",
        "linkId": "282415113",
        "unknownInput": "",
        "type": "s",
        "latLng": {
          "lat": 51.507276,
          "lng": -0.12766
        },
        "displayLatLng": {
          "lat": 51.507276,
          "lng": -0.12766
        },
        "mapUrl": "http://www.mapquestapi.com/staticmap/v5/map?key=bTdBubAIGCp23LC0DL0nfCNW3R4HzIQj&type=map&size=225,160&locations=51.507276,-0.12766|marker-sm-50318A-1&scalebar=true&zoom=12&rand=-2104418756"
      },
  ```

  - OpenWeatherMap API: https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=50&units=imperial&exclude=minutely&appid=[key]

  ```
  {
    "lat": 50,
    "lon": 50,
    "timezone": "Asia/Oral",
    "timezone_offset": 18000,
    "current": {
        "dt": 1635445154,
        "sunrise": 1635391366,
        "sunset": 1635427476,
        "temp": 40.95,
        "feels_like": 35.31,
        "pressure": 1020,
        "humidity": 67,
        "dew_point": 30.99,
        "uvi": 0,
        "clouds": 85,
        "visibility": 10000,
        "wind_speed": 8.88,
        "wind_deg": 224,
        "wind_gust": 20.4,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ]
    },
  ```

## MVP:
  - User will be able to look up weather forcast using a third party API
  - User will be able to create an account
  - User will be able to save locations using Airtable API
  - display and interface will change depending on screen size. 

## Post-MVP:
  - use material UI for design components
  - add in touch screen swipe capabilities
  - display small current weather layout for favorites

## Project Schedule: 
| Day       | Deliverable                                         |   Status   |
| --------- | --------------------------------------------------- | :--------: |
|Friday     | build wireframe and propose project for approval    |complete|
|Saturday   | add basic components in react                       |complete|
|Sunday     | build components to reach MVP                       |complete|
|Monday     | continue to work on components and API's            |complete|
|Tuesday    | finish components and start CSS                     |complete|
|Wednesday  | work on CSS and post-MVP                            |complete|
|Thursday   | finish CSS and post-MVP                             |complete|
|Friday     | present project                                     |incomplete|

## Timeframes:
| Task            | Estimated Time | Actual Time |
| --------------- | :------------: | :---------: |
|set up APIs      | 4 hours        | 8 hours     |
|build readme     | 2 hours        | 3 hours     |
|react components | 20 hours       | 25 hours    |
|CSS styling      | 4 hours        | 6 hours     |
|adding MUI       | 2 hours        | 4 hours     |
|total:           | 30 hours       | 46 hours    |


## SWOT Analysis:
  - Strengths: I'm skilled in figuring out complex logic and doing research.
  - Weaknesses: I'm not as comfortable in React as I am in vanilla JavaScript.
  - Opportunities: I have a good opportunity to learn more about React and what I'm able to do with it.
  - Threats: Airtable may not work the way I want it to. React has some rules that make it hard to work with without beingmore familiar with the framework.