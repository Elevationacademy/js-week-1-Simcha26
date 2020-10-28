                        ///// Exercise_1 /////
                
         let numChildren = prompt("How many children?")
         const isCareful = true
         if(isCareful){
         numChildren++
         }
         console.log(numChildren)
         
                     /* Note: only let id can be incremented*/
         
                     // Question:
                     // Why when using prompt, incrementing the value of 
                     // the variable it adds 10 instead of 1
         
                     // Answer:
                     // console.log(numChildren++) was inside code block
         
         
                         ///// Exercise_2 /////
                         
         const silverwareCount = 8
         if(silverwareCount % 2 == 0){
             console.log("Something is missing")
         }
         console.log(silverwareCount)
         
         const rockCount = 9
         if(rockCount < 10){
             console.log('Were missing rocks')
         }
         console.log(rockCount)
         
                     // Q: Why doesn't strg in first code block log?
                     // A: value was an odd number
         
         
         
                         ///// Exercise 3 /////
         
         let job = "amazing"
         let pay = 5000
         okBonus = 1000
         greatBonus = 2000
         if(!job){
             console.log(pay + greatBonus)
         }else{
         console.log(pay + okBonus)
         }
         
         
         
         
                          ///// Exercise 4 /////
         
         const hasDegree = false
         let payTuition = 20000
         if(hasDegree || !payTuition){
             console.log("Welcome to elevation academy")
         }else{
             console.log("Sorry, we are full")
         }
         
         