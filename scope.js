// *SCOPE*

// SCOPE_EXERCISE_1
//===================================================================================
//Section 1
//===================================================================================

// /*Step_1*/  const run = true
// /*Step_2*/  if (run) {
//             let distance = 8

// /*Step_3*/  for (var i = 0; i < distance; i++) {
//             console.log("running")
//             }
//             console.log("Finished running " + distance + " miles")
//             }
// /* Step_4*/ console.log("Damn, you see this gal? She ran " + distance + " miles")    
// /* ERROR, DISTANCE VARIABLE IS NOT DEFINED BECAUSE ITS OUTSIDE OF LOCAL SCOPE THAT'S BEING ACCESSED*/
// // ==================================================================================================

// /* Step_1: Global boolean variable */
// /* Step_2: Local Cond statement */
// /* Step_3: Local loop nested in cond statement 
//            var can access outside of its local scope*/
// /* Step_4: Outside of both local scopes, so identify the 'let' distance variable*/           
// // ==================================================================================================






// SCOPE_EXERCISE_2
// //===================================================================================
// //Section 2
// //===================================================================================


// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }

// //===================================================================================
// //Section 3
// //===================================================================================

// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

// //===================================================================================
// //Section 4
// //===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// //===================================================================================
// //Section 6 - Optional (if you have time)
// //===================================================================================
// const isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }

// =====================================================
// *THIS_EXERCISE_1*

  const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed()

// ========================================================
// *THIS_EXERCISE_2*

// const pump = function (amount) {
//     liters += amount;
//     console.log('You put ' + this.amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);