export default [
    // {
    //     "startTime": "2016-08-03T20:32:52.153Z",
    //     "endTime": "2016-08-03T20:48:12.336Z",
    //     "startLatLang": {
    //         "lat": 51.52181625366211,
    //         "lng": -0.10915730148553848
    //     },
    //     "endLatLang": {
    //         "lat": 51.50479507446289,
    //         "lng": -0.09034080058336258
    //     },
    //     "durationMs": 920183.000064,
    //     "journeyPlan": {
    //         "start": {
    //             "lat": 51.52181625366211,
    //             "lng": -0.10915730148553848
    //         },
    //         "end": {
    //             "lat": 51.50479507446289,
    //             "lng": -0.09034080058336258
    //         },
    //         "startTime": "2016-08-03T20:32:52.153Z",
    //         "rawInfo": {
    //             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Journey, Tfl.Api.Presentation.Entities",
    //             "startDateTime": "2016-11-13T21:22:00",
    //             "duration": 32,
    //             "arrivalDateTime": "2016-11-13T21:54:00",
    //             "legs": [
    //                 {
    //                     "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
    //                     "duration": 10,
    //                     "instruction": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
    //                         "summary": "Walk to Farringdon",
    //                         "detailed": "Walk to Farringdon",
    //                         "steps": [
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
    //                                 "description": "Hatton Garden for 30 metres",
    //                                 "turnDirection": "STRAIGHT",
    //                                 "streetName": "Hatton Garden",
    //                                 "distance": 30,
    //                                 "cumulativeDistance": 30,
    //                                 "skyDirection": 318,
    //                                 "skyDirectionDescription": "NorthWest",
    //                                 "cumulativeTravelTime": 26,
    //                                 "latitude": 51.52182063706,
    //                                 "longitude": -0.10914327951,
    //                                 "pathAttribute": {
    //                                     "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
    //                                 },
    //                                 "descriptionHeading": "Continue along ",
    //                                 "trackType": "None"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
    //                                 "description": "on to Clerkenwell Road, continue for 225 metres",
    //                                 "turnDirection": "SHARP_RIGHT",
    //                                 "streetName": "Clerkenwell Road",
    //                                 "distance": 225,
    //                                 "cumulativeDistance": 255,
    //                                 "skyDirection": 444,
    //                                 "skyDirectionDescription": "North",
    //                                 "cumulativeTravelTime": 227,
    //                                 "latitude": 51.52202298478,
    //                                 "longitude": -0.10942319512000001,
    //                                 "pathAttribute": {
    //                                     "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
    //                                 },
    //                                 "descriptionHeading": "Take a sharp right",
    //                                 "trackType": "None"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
    //                                 "description": "on to Turnmill Street, continue for 209 metres",
    //                                 "turnDirection": "RIGHT",
    //                                 "streetName": "Turnmill Street",
    //                                 "distance": 209,
    //                                 "cumulativeDistance": 464,
    //                                 "skyDirection": 515,
    //                                 "skyDirectionDescription": "North",
    //                                 "cumulativeTravelTime": 413,
    //                                 "latitude": 51.52222232074,
    //                                 "longitude": -0.10617157954999999,
    //                                 "pathAttribute": {
    //                                     "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
    //                                 },
    //                                 "descriptionHeading": "Turn right",
    //                                 "trackType": "None"
    //                             }
    //                         ]
    //                     },
    //                     "obstacles": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
    //                             "type": "WALKWAY",
    //                             "incline": "LEVEL",
    //                             "stopId": 1000080,
    //                             "position": "IDEST"
    //                         },
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
    //                             "type": "STAIRS",
    //                             "incline": "DOWN",
    //                             "stopId": 1000080,
    //                             "position": "IDEST"
    //                         }
    //                     ],
    //                     "departureTime": "2016-11-13T21:22:00",
    //                     "arrivalTime": "2016-11-13T21:32:00",
    //                     "departurePoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "platformName": "",
    //                         "icsCode": "99999997",
    //                         "commonName": "Hatton Garden, City",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.52182063706,
    //                         "lon": -0.10914327951
    //                     },
    //                     "arrivalPoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "naptanId": "490G00080B",
    //                         "platformName": "",
    //                         "icsCode": "1000080",
    //                         "commonName": "Farringdon Station",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.520431271339994,
    //                         "lon": -0.10496300361
    //                     },
    //                     "path": {
    //                         "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
    //                         "lineString": "[[51.52182063706, -0.10914327951],[51.52202298478, -0.10942319512],[51.52207583184, -0.10823898589],[51.52212068873, -0.10767494582],[51.52215082425, -0.1073133238],[51.52218165611, -0.10699491718],[51.52222232074, -0.10617157955],[51.52164020558, -0.10576328733],[51.52116313488, -0.10517767029],[51.52097022922, -0.10492621565],[51.52060681214, -0.10469625688],[51.52053980765, -0.10500174128],[51.52053980765, -0.10500174128],[51.52060681214, -0.10469625688],[51.5205250025, -0.10464199582],[51.52043127134, -0.10496300361]]",
    //                         "stopPoints": [],
    //                         "elevation": []
    //                     },
    //                     "routeOptions": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
    //                             "name": "",
    //                             "directions": [
    //                                 ""
    //                             ]
    //                         }
    //                     ],
    //                     "mode": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                         "id": "walking",
    //                         "name": "walking",
    //                         "type": "Mode"
    //                     },
    //                     "disruptions": [],
    //                     "plannedWorks": [],
    //                     "distance": 464,
    //                     "isDisrupted": false,
    //                     "hasFixedLocations": true
    //                 },
    //                 {
    //                     "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
    //                     "duration": 4,
    //                     "instruction": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
    //                         "summary": "Metropolitan line or Hammersmith & City line to Liverpool Street",
    //                         "detailed": "Metropolitan line towards Aldgate or Hammersmith & City line towards Barking",
    //                         "steps": []
    //                     },
    //                     "obstacles": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
    //                             "type": "STAIRS",
    //                             "incline": "UP",
    //                             "stopId": 1000138,
    //                             "position": "AFTER"
    //                         },
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
    //                             "type": "STAIRS",
    //                             "incline": "UP",
    //                             "stopId": 1000138,
    //                             "position": "AFTER"
    //                         },
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Obstacle, Tfl.Api.Presentation.Entities",
    //                             "type": "WALKWAY",
    //                             "incline": "LEVEL",
    //                             "stopId": 1000138,
    //                             "position": "AFTER"
    //                         }
    //                     ],
    //                     "departureTime": "2016-11-13T21:32:00",
    //                     "arrivalTime": "2016-11-13T21:36:00",
    //                     "departurePoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "naptanId": "940GZZLUFCN",
    //                         "platformName": "",
    //                         "icsCode": "1000080",
    //                         "commonName": "Farringdon Underground Station",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.520431271339994,
    //                         "lon": -0.10496300361
    //                     },
    //                     "arrivalPoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "naptanId": "940GZZLULVT",
    //                         "platformName": "",
    //                         "icsCode": "1000138",
    //                         "commonName": "Liverpool Street Underground Station",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.51726729232,
    //                         "lon": -0.08236441275
    //                     },
    //                     "path": {
    //                         "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
    //                         "lineString": "[[51.52045706721, -0.10488986088],[51.52022937874, -0.10471192692],[51.51999959493, -0.10440435359],[51.51981241446, -0.10395087222],[51.51970634371, -0.10350843915],[51.51964473789, -0.10303533224],[51.51963648036, -0.1019690301],[51.51968014151, -0.10133299265],[51.5200825659, -0.09952888607],[51.52030021744, -0.09797749052],[51.52030021744, -0.09797749052],[51.52035704894, -0.09760034925],[51.52038411554, -0.0970514752],[51.52031139335, -0.09644910396],[51.52018498315, -0.09586338829],[51.51852398304, -0.08938880506],[51.51852398304, -0.08938880506],[51.51813042367, -0.08786301218],[51.51761119202, -0.08469937193],[51.51727769164, -0.08245045646],[51.51725830592, -0.0823647902]]",
    //                         "stopPoints": [
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "940GZZLUBBN",
    //                                 "name": "Barbican Underground Station",
    //                                 "uri": "/StopPoint/940GZZLUBBN",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "940GZZLUMGT",
    //                                 "name": "Moorgate Underground Station",
    //                                 "uri": "/StopPoint/940GZZLUMGT",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "940GZZLULVT",
    //                                 "name": "Liverpool Street Underground Station",
    //                                 "uri": "/StopPoint/940GZZLULVT",
    //                                 "type": "StopPoint"
    //                             }
    //                         ],
    //                         "elevation": []
    //                     },
    //                     "routeOptions": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
    //                             "name": "Metropolitan",
    //                             "directions": [
    //                                 "Aldgate Underground Station"
    //                             ],
    //                             "lineIdentifier": {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "metropolitan",
    //                                 "name": "Metropolitan",
    //                                 "uri": "/Line/metropolitan",
    //                                 "type": "Line"
    //                             }
    //                         },
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
    //                             "name": "Hammersmith & City",
    //                             "directions": [
    //                                 "Barking Underground Station"
    //                             ],
    //                             "lineIdentifier": {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "hammersmith-city",
    //                                 "name": "Hammersmith & City",
    //                                 "uri": "/Line/hammersmith-city",
    //                                 "type": "Line"
    //                             }
    //                         }
    //                     ],
    //                     "mode": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                         "id": "tube",
    //                         "name": "tube",
    //                         "type": "Mode"
    //                     },
    //                     "disruptions": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
    //                             "category": "Crowding",
    //                             "type": "stopInfo",
    //                             "categoryDescription": "Crowding",
    //                             "description": "FARRINGDON: The busiest time at Farringdon Tube station is 17:45 - 18:15 on weekdays. If you are able to travel outside this time, you could have a quicker and more comfortable journeyPlan",
    //                             "additionalInfo": "",
    //                             "created": "2016-09-21T17:19:00",
    //                             "lastUpdate": "2016-09-21T17:19:00"
    //                         },
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
    //                             "category": "PlannedWork",
    //                             "type": "stopInfo",
    //                             "categoryDescription": "PlannedWork",
    //                             "description": "LIVERPOOL STREET STATION: Please note that on the eastbound Circle, Hammersmith & City and Metropolitan lines, only the front five coaches are step-free between the trains and the platform. Step-free access is not presently available to the westbound platform or any Central line services.",
    //                             "additionalInfo": "",
    //                             "created": "2015-11-11T14:47:00",
    //                             "lastUpdate": "2015-11-20T10:16:00"
    //                         },
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
    //                             "category": "Crowding",
    //                             "type": "stopInfo",
    //                             "categoryDescription": "Crowding",
    //                             "description": "LIVERPOOL STREET: The busiest times at Liverpool Street Tube station are 08:30 - 08:45 and 17:45 - 18:15 on weekdays. If you are able to travel outside these times, you could have a quicker and more comfortable journeyPlan",
    //                             "additionalInfo": "<a href=\"http://content.tfl.gov.uk/emails/events/travel-options-from-liverpool-street-station.pdf\">Download PDF for details about busiest times at Liverpool Street Tube station (93KB)</a>",
    //                             "created": "2016-09-22T15:28:00",
    //                             "lastUpdate": "2016-09-27T13:03:00"
    //                         }
    //                     ],
    //                     "plannedWorks": [],
    //                     "isDisrupted": true,
    //                     "hasFixedLocations": true
    //                 },
    //                 {
    //                     "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
    //                     "duration": 7,
    //                     "instruction": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
    //                         "summary": "35 bus to Southwark Street, The Borough",
    //                         "detailed": "35 bus towards Clapham Junction",
    //                         "steps": []
    //                     },
    //                     "obstacles": [],
    //                     "departureTime": "2016-11-13T21:45:00",
    //                     "arrivalTime": "2016-11-13T21:52:00",
    //                     "departurePoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "naptanId": "490G00138E",
    //                         "platformName": "K",
    //                         "stopLetter": "K",
    //                         "icsCode": "1000138",
    //                         "commonName": "Liverpool Street Station",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.51725652188,
    //                         "lon": -0.08060642877
    //                     },
    //                     "arrivalPoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "naptanId": "490G00019864",
    //                         "platformName": "",
    //                         "stopLetter": "->S",
    //                         "icsCode": "1019864",
    //                         "commonName": "Southwark Street",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.504035568860004,
    //                         "lon": -0.09096031349
    //                     },
    //                     "path": {
    //                         "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
    //                         "lineString": "[[51.51728465956, -0.08067731295],[51.51702758954, -0.08090432007],[51.51694812602, -0.08099414014],[51.51683248121, -0.0810710673],[51.51672605837, -0.08116201973],[51.51662838622, -0.08123819075],[51.51630083744, -0.08155463157],[51.51612299418, -0.08167740871],[51.51588436594, -0.08193245543],[51.51567222529, -0.08215756103],[51.51567222529, -0.08215756103],[51.51536288211, -0.08248763662],[51.51495657087, -0.08293708073],[51.51439250329, -0.08363815122],[51.5139741423, -0.08390072001],[51.5139027216, -0.08393254178],[51.5139027216, -0.08393254178],[51.51339308417, -0.08411246143],[51.51301043238, -0.08435910972],[51.51298370837, -0.08437464291],[51.51278788902, -0.08449815382],[51.51266372566, -0.08460424601],[51.51251236776, -0.08469706635],[51.51235225853, -0.08480466496],[51.51191662714, -0.08511117016],[51.51145427069, -0.08543320145],[51.51137433326, -0.08549419912],[51.51137433326, -0.08549419912],[51.51130338222, -0.08555481983],[51.51109881012, -0.0856930993],[51.51094034517, -0.08590150188],[51.5108615826, -0.0860345057],[51.51087691396, -0.08642297063],[51.51087121698, -0.08662496876],[51.51071040102, -0.08668935216],[51.51030883075, -0.08687911135],[51.50980793956, -0.08704420537],[51.50973651788, -0.08707601917],[51.50952201788, -0.08715705884],[51.50952201788, -0.08715705884],[51.50902159588, -0.08735094867],[51.5089144632, -0.08739866775],[51.50790392696, -0.08774360664],[51.50682149784, -0.08809153917],[51.50673210291, -0.08812410149],[51.50658925879, -0.08818772109],[51.50658925879, -0.08818772109],[51.50641969002, -0.08826686887],[51.5063395162, -0.08831345453],[51.50617940321, -0.08842102543],[51.50610845048, -0.08848163452],[51.50586957144, -0.08872218876],[51.50572790025, -0.08885780492],[51.50568390662, -0.08891728471],[51.50558669818, -0.08902222002],[51.50520708444, -0.08945598067],[51.5050400949, -0.08969351825],[51.50490928521, -0.08994395059],[51.50481348281, -0.09013527989],[51.50468056187, -0.09025611314],[51.50450294296, -0.09039322375],[51.50429195686, -0.09069023048],[51.50415122088, -0.09088343362],[51.50406323143, -0.09100238504]]",
    //                         "stopPoints": [
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "490G00004043",
    //                                 "name": "Wormwood Street",
    //                                 "uri": "/StopPoint/490G00004043",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "490G00009037",
    //                                 "name": "Threadneedle Street",
    //                                 "uri": "/StopPoint/490G00009037",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "490G000934",
    //                                 "name": "Fenchurch Street",
    //                                 "uri": "/StopPoint/490G000934",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "490G09267E",
    //                                 "name": "Monument Station",
    //                                 "uri": "/StopPoint/490G09267E",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "490G000922",
    //                                 "name": "London Bridge",
    //                                 "uri": "/StopPoint/490G000922",
    //                                 "type": "StopPoint"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "490G00019864",
    //                                 "name": "Southwark Street",
    //                                 "uri": "/StopPoint/490G00019864",
    //                                 "type": "StopPoint"
    //                             }
    //                         ],
    //                         "elevation": []
    //                     },
    //                     "routeOptions": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
    //                             "name": "35",
    //                             "directions": [
    //                                 "Clapham Junction"
    //                             ],
    //                             "lineIdentifier": {
    //                                 "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                                 "id": "35",
    //                                 "name": "35",
    //                                 "uri": "/Line/35",
    //                                 "type": "Line"
    //                             }
    //                         }
    //                     ],
    //                     "mode": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                         "id": "bus",
    //                         "name": "bus",
    //                         "type": "Mode"
    //                     },
    //                     "disruptions": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
    //                             "category": "RealTime",
    //                             "type": "lineInfo",
    //                             "categoryDescription": "RealTime",
    //                             "description": "Buses in the Canada Water, Limehouse, London Bridge, Southwark, Tower Hill and Waterloo areas delayed up to forty minutes and some services may terminate early due to the planned closure of Tower Bridge. Allow extra time for your journeyPlan and follow @TfLBusAlerts on Twitter for realtime information.",
    //                             "additionalInfo": "",
    //                             "created": "2016-09-05T12:49:00",
    //                             "lastUpdate": "2016-09-25T14:11:00"
    //                         }
    //                     ],
    //                     "plannedWorks": [],
    //                     "isDisrupted": true,
    //                     "hasFixedLocations": true
    //                 },
    //                 {
    //                     "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Leg, Tfl.Api.Presentation.Entities",
    //                     "duration": 2,
    //                     "instruction": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Instruction, Tfl.Api.Presentation.Entities",
    //                         "summary": "Walk to 10 Southwark Street",
    //                         "detailed": "Walk to 10 Southwark Street",
    //                         "steps": [
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
    //                                 "description": "Borough High Street for 104 metres",
    //                                 "turnDirection": "STRAIGHT",
    //                                 "streetName": "Borough High Street",
    //                                 "distance": 104,
    //                                 "cumulativeDistance": 104,
    //                                 "skyDirection": 399,
    //                                 "skyDirectionDescription": "North",
    //                                 "cumulativeTravelTime": 90,
    //                                 "latitude": 51.50406323143,
    //                                 "longitude": -0.09100238504,
    //                                 "pathAttribute": {
    //                                     "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
    //                                 },
    //                                 "descriptionHeading": "Continue along ",
    //                                 "trackType": "None"
    //                             },
    //                             {
    //                                 "$type": "Tfl.Api.Presentation.Entities.InstructionStep, Tfl.Api.Presentation.Entities",
    //                                 "description": "on to Southwark Street, continue for 14 metres",
    //                                 "turnDirection": "SHARP_LEFT",
    //                                 "streetName": "Southwark Street",
    //                                 "distance": 14,
    //                                 "cumulativeDistance": 118,
    //                                 "skyDirection": 261,
    //                                 "skyDirectionDescription": "North",
    //                                 "cumulativeTravelTime": 96,
    //                                 "latitude": 51.50481348281,
    //                                 "longitude": -0.09013527989,
    //                                 "pathAttribute": {
    //                                     "$type": "Tfl.Api.Presentation.Entities.PathAttribute, Tfl.Api.Presentation.Entities"
    //                                 },
    //                                 "descriptionHeading": "Take a sharp left",
    //                                 "trackType": "None"
    //                             }
    //                         ]
    //                     },
    //                     "obstacles": [],
    //                     "departureTime": "2016-11-13T21:52:00",
    //                     "arrivalTime": "2016-11-13T21:54:00",
    //                     "departurePoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    //                         "naptanId": "490G00019864",
    //                         "platformName": "",
    //                         "stopLetter": "->S",
    //                         "icsCode": "1019864",
    //                         "commonName": "Southwark Street",
    //                         "placeType": "StopPoint",
    //                         "additionalProperties": [],
    //                         "lat": 51.504035568860004,
    //                         "lon": -0.09096031349
    //                     },
    //                     "arrivalPoint": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Place, Tfl.Api.Presentation.Entities",
    //                         "commonName": "10 Southwark Street",
    //                         "placeType": "StopPoint",
    //                         "lat": 51.5047987927,
    //                         "lon": -0.09033762661000001
    //                     },
    //                     "path": {
    //                         "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.Path, Tfl.Api.Presentation.Entities",
    //                         "lineString": "[[51.50403556886, -0.09096031349],[51.50406323143, -0.09100238504],[51.50415122088, -0.09088343362],[51.50429195686, -0.09069023048],[51.50450294296, -0.09039322375],[51.50468056187, -0.09025611314],[51.50481348281, -0.09013527989],[51.50479855822, -0.09032322695],[51.5047987927, -0.09033762661]]",
    //                         "stopPoints": [],
    //                         "elevation": []
    //                     },
    //                     "routeOptions": [
    //                         {
    //                             "$type": "Tfl.Api.Presentation.Entities.JourneyPlanner.RouteOption, Tfl.Api.Presentation.Entities",
    //                             "name": "",
    //                             "directions": [
    //                                 ""
    //                             ]
    //                         }
    //                     ],
    //                     "mode": {
    //                         "$type": "Tfl.Api.Presentation.Entities.Identifier, Tfl.Api.Presentation.Entities",
    //                         "id": "walking",
    //                         "name": "walking",
    //                         "type": "Mode"
    //                     },
    //                     "disruptions": [],
    //                     "plannedWorks": [],
    //                     "distance": 118,
    //                     "isDisrupted": false,
    //                     "hasFixedLocations": false
    //                 }
    //             ]
    //         }
    //     }
    // },
    // {
    //     "startTime": "2016-08-04T07:36:20.736Z",
    //     "endTime": "2016-08-04T08:18:09.894Z",
    //     "startLatLang": {
    //         "lat": 51.43941879272461,
    //         "lng": -0.05254629999399185
    //     },
    //     "endLatLang": {
    //         "lat": 51.50727844238281,
    //         "lng": -0.09378480166196823
    //     },
    //     "durationMs": 2509158.000128
    // },
    // {
    //     "startTime": "2016-08-04T17:01:49.263Z",
    //     "endTime": "2016-08-04T17:43:38.473Z",
    //     "startLatLang": {
    //         "lat": 51.507476806640625,
    //         "lng": -0.09384039789438248
    //     },
    //     "endLatLang": {
    //         "lat": 51.44784164428711,
    //         "lng": -0.1150078997015953
    //     },
    //     "durationMs": 2509210.999808
    // },
    // {
    //     "startTime": "2016-08-05T07:51:57.020Z",
    //     "endTime": "2016-08-05T08:23:13.569Z",
    //     "startLatLang": {
    //         "lat": 51.45169448852539,
    //         "lng": -0.12054160237312317
    //     },
    //     "endLatLang": {
    //         "lat": 51.50730895996094,
    //         "lng": -0.09382209926843643
    //     },
    //     "durationMs": 1876548.999936
    // },
    // {
    //     "startTime": "2016-08-05T16:47:51.929Z",
    //     "endTime": "2016-08-05T17:23:41.357Z",
    //     "startLatLang": {
    //         "lat": 51.507225036621094,
    //         "lng": -0.09394320100545883
    //     },
    //     "endLatLang": {
    //         "lat": 51.44784164428711,
    //         "lng": -0.1150078997015953
    //     },
    //     "durationMs": 2149427.000064
    // },




    {
        "startTime": "2016-08-08T07:47:48.495Z",
        "endTime": "2016-08-08T08:21:42.269Z",
        "startLatLang": {
            "lat": 51.44790267944336,
            "lng": -0.11498010158538818
        },
        "endLatLang": {
            "lat": 51.507205963134766,
            "lng": -0.09384889900684357
        },
        "durationMs": 2033773.999872
    },



    // {
    //     "startTime": "2016-08-08T17:15:17.023Z",
    //     "endTime": "2016-08-08T17:45:37.316Z",
    //     "startLatLang": {
    //         "lat": 51.507240295410156,
    //         "lng": -0.09385509788990021
    //     },
    //     "endLatLang": {
    //         "lat": 51.452484130859375,
    //         "lng": -0.10537619888782501
    //     },
    //     "durationMs": 1820292.999936
    // },
    // {
    //     "startTime": "2016-08-09T07:26:46.321Z",
    //     "endTime": "2016-08-09T08:00:11.469Z",
    //     "startLatLang": {
    //         "lat": 51.447792053222656,
    //         "lng": -0.11508359760046005
    //     },
    //     "endLatLang": {
    //         "lat": 51.507293701171875,
    //         "lng": -0.09382720291614532
    //     },
    //     "durationMs": 2005148
    // },
    // {
    //     "startTime": "2016-08-09T16:50:20.783Z",
    //     "endTime": "2016-08-09T17:28:51.895Z",
    //     "startLatLang": {
    //         "lat": 51.5054817199707,
    //         "lng": -0.09256280213594437
    //     },
    //     "endLatLang": {
    //         "lat": 51.43943786621094,
    //         "lng": -0.052442699670791626
    //     },
    //     "durationMs": 2311112
    // },
    // {
    //     "startTime": "2016-08-14T14:51:26.723Z",
    //     "endTime": "2016-08-14T15:08:36.660Z",
    //     "startLatLang": {
    //         "lat": 51.43943786621094,
    //         "lng": -0.052442699670791626
    //     },
    //     "endLatLang": {
    //         "lat": 51.455013275146484,
    //         "lng": -0.11378099769353867
    //     },
    //     "durationMs": 1029936.999936
    // },
    // {
    //     "startTime": "2016-08-22T07:55:52.369Z",
    //     "endTime": "2016-08-22T08:27:37.349Z",
    //     "startLatLang": {
    //         "lat": 51.452125549316406,
    //         "lng": -0.12479519844055176
    //     },
    //     "endLatLang": {
    //         "lat": 51.507057189941406,
    //         "lng": -0.09452729672193527
    //     },
    //     "durationMs": 1904980
    // },
    // {
    //     "startTime": "2016-08-22T17:24:59.144Z",
    //     "endTime": "2016-08-22T18:01:21.947Z",
    //     "startLatLang": {
    //         "lat": 51.50690460205078,
    //         "lng": -0.09407079964876175
    //     },
    //     "endLatLang": {
    //         "lat": 51.44648361206055,
    //         "lng": -0.04975320026278496
    //     },
    //     "durationMs": 2182803.000064
    // },
    // {
    //     "startTime": "2016-08-26T16:42:02.851Z",
    //     "endTime": "2016-08-26T17:05:15.348Z",
    //     "startLatLang": {
    //         "lat": 51.43925094604492,
    //         "lng": -0.05261480063199997
    //     },
    //     "endLatLang": {
    //         "lat": 51.44792556762695,
    //         "lng": -0.113816998898983
    //     },
    //     "durationMs": 1392496.999936
    // },
    // {
    //     "startTime": "2016-08-27T08:22:57.166Z",
    //     "endTime": "2016-08-27T08:30:24.310Z",
    //     "startLatLang": {
    //         "lat": 51.44517135620117,
    //         "lng": -0.07030169665813446
    //     },
    //     "endLatLang": {
    //         "lat": 51.439353942871094,
    //         "lng": -0.05253409966826439
    //     },
    //     "durationMs": 447144
    // },
    // {
    //     "startTime": "2016-08-31T11:47:30.800Z",
    //     "endTime": "2016-08-31T11:47:58.870Z",
    //     "startLatLang": {
    //         "lat": 50.20658874511719,
    //         "lng": -5.479750156402588
    //     },
    //     "endLatLang": {
    //         "lat": 50.206214904785156,
    //         "lng": -5.47979211807251
    //     },
    //     "durationMs": 28070.000128
    // }
].map(lol => Object.assign(lol, {
    startTime: new Date(lol.startTime),
    endTime: new Date(lol.endTime)
}));