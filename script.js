// //arrays
// //collection of elements
// //element can value of any datatype //ordered collection //mutable //dynamic in size //multi-dimensional array

// let arr=[1,"string",true,null,undefined,[],{}]

// console.log(arr.length)

// // for(s=0;s<arr.length-1;s++){
// //     console.log(arr[s])
// // }

// console.log(typeof(arr))
// console.log(typeof(null))


// console.log(arr.slice(0,2))

// //push- pushing elements to array

// arr.push("shashi")
// console.log(arr)

// //pop- removes last element if required

// arr.pop()
// console.log(arr)
// arr.pop()
// console.log(arr)

// //shift- removes first element if required
// arr.shift()
// console.log(arr)

// //unshift- inserts the element at the first of array
// arr.unshift("shashi")
// console.log(arr)

// //splice- used to insert or delete from an array
// //3 parameters //1 start index //2. how many elements to delete //3. values to be inserted
// arr.splice(3,0,"hi")
// console.log(arr)

// //sort- sorting the elements //in ascending order

// arr=[5,7,9,6,8,1,4,3,0,2]
// arr.sort()
// console.log(arr)

// //reverse- reverse the array elements
// arr.reverse()
// console.log(arr)

// //join - used to join the elements
// let arr2=arr.join("-")
// console.log(arr2)

// //indexof - takes elements of array as parameters
// console.log(arr.indexOf(5))

// //lastIndexOf
// console.log(arr.lastIndexOf(5))

// //includes
// console.log(arr.includes(10))

// let arr1=[[1,8,8],[2,7,7],[3,6,6]]
// arr.flat()
// console.log(arr1)
// let arr3=arr1.flat(2)
// console.log(arr3)

// console.log(typeof(Infinity))


//even numbers code

let ev=[1,2,3,4,5,6,7,8,9,10]
function even(){
    for(i=0;i<=ev.length+1;i++){
        if (ev[i]%2==0){
            console.log(ev[i])
        }
    }
}
even(ev)


//Array Methods :-

//Push:-It is used to add the elements

let arr=[1,2,[1,2],3]

arr.push(4)
arr.push("Shashi")
console.log(arr)

//pop :-It is used to remove the last element
arr.pop()
console.log(arr)

//unshift:- it is used to add elements infront of arr.
arr.unshift(2,[6,7])
arr.unshift("Shashi","lucky")
console.log(arr)

//shift :-It is used to remove the first element in arr
arr.shift()
console.log(arr)

//Length:-To know the length of array
let size=arr.length
console.log(size)

// Arr at() :- It shows index values at that position
let arr1=arr.at(2)
console.log(arr1)

//join:- It is used to join the elemnts between the elements
//flat:-It is used to display the elements in sigle array without sub array.
let ar=[2,6,3,[1,2],[3,4,5],6]
let ar_=ar.flat(2)
console.log(ar_) 

let jn_=[2,4,5,6,7,9]
console.log(jn_.join("*")) 

let arr2=arr.flat(2)
console.log(arr2)
let jn=arr2.join("*")
console.log(jn)

// splice :- It is used to insert and delete an elements from array

arr.splice(0,1,"shashi")
arr.splice(2,1,"lucky")
arr.splice(2,0,"abhi")
console.log(arr)

// sort:- it is used to sort the elemnets in the array 

let  sr=[4,2,6,77,5,3,1]
console.log(sr.sort())  
let sr1=[1,2,22,56,34,77,897,111,6,70]
sr1.sort()  
sr1.reverse() 
console.log(sr1)

// to string:- It is used to change the elements into strings 
let str=["apple","Ball","cat"]
console.log(str.toString())

// Concat:- It is used to merge to arrays 
let a1=[1,2,3,3,4]
let a2=[4,5,6]
console.log(a1.concat(a2))
let a3=["shashi",true]
let a4=["lucky",false]
console.log(a3.concat(a4))


console.log(a1.indexOf(3))  
console.log(a1.lastIndexOf(3)) 


let arr3=[1,2,3,4,5,6]
console.log(arr3.includes(4)) 
console.log(arr3.includes(7)) 


delete arr3[1]
console.log(arr3)



let arr4=["shashi","lucky","abhi","jani","omesh","chinna","omesh"]
console.log(arr4.copyWithin(3,0)) 
let arr5=["shashi","lucky","abhi","jani","omesh","chinna","jani"]
console.log(arr5.copyWithin(2,0,2))
let a5=[1,2,3,4,5,6,7,8]
console.log(a5.copyWithin(3,0,3)) 
