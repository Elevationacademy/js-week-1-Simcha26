// ///// Exercise_1/////
p1 = {
name: "bob",
age: 20,
city: "paris"
}

p2 = {
name: "jen",
age: 20,
city: "london"
}
if(p1.age == p2.age && p1.city == p2.city){
    console.log(p2.name + " wants to date " + p1.name)
}else{
    console.log(p2.name + " wants to date " + p1.name + " but can't")

}

///// Exercise_2/////
let myList = [
    {item: "obj1", count: 15},
    {item: "obj2", count: 11}
]
myList[0].count = 72
myList.splice(1, 1)
console.log(myList)

////// Exercise_3//////

let myOtherList = [
    {Item2: "obj3"},
    {Item2: "obj4"}
]

myList.push(myOtherList)

///// Exercise_4

let library = {
    books: [
        bookA = {
            title: "book_a",
            author: "author_a"
        },
        bookB = {
            title: "book_b",
            author: "author_b"
        }
    ]
}
myList.push (...library.books)