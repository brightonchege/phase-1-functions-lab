// Code your solution in this file!
     function distanceFromHqInBlocks(distance){
          if(distance > 42){
               return distance - 42
          }
          if(distance < 42){
               return 42 - distance
          }
    
            
     }
     function distanceFromHqInFeet(distance){
          return distanceFromHqInBlocks(distance) * 264
     }
     
     function distanceTravelledInFeet(start,destination){
          return Math.abs(destination - start) *264

     }
     function calculatesFarePrice(start, destination){
          if(distanceTravelledInFeet(start,destination) < 400){
               return 0
          }

          if(distanceTravelledInFeet(start,destination) <= 2000){
               return (distanceTravelledInFeet(start,destination)- 400)/50

          }
          else if(distanceTravelledInFeet(start,destination) > 2500){
               return 'cannot travel that far'
          }
          else{
               return 25;
          }



          
     }

     





    