////////////////////////////////
// HTML and CSS
////////////////////////////////


//Rank you comfort with the following material on a scale of 0 - 5:

// 5


////////////////////////////////
// Javascript Reps
////////////////////////////////

//Write a for loop that will log the numbers 1 through 20.

// for (let i = 0; i < 20; i++) {
//     console.log(i)
// }

//Write a for loop that will log only the even numbers in 0 through 200.

// for (let i = 0; i < 200; i++) {
//     if (i % 2 == 0) {
//         console.log(i)

//     }
// }
////////////////////////////////
// Fizz Buzz
////////////////////////////////

//This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.

for (let i = 1; i < 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
}
// If a number is divisible by 3 log "Fizz" instead of the number.


// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee[2] = 5001;

console.log(plantee)

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

wolfy[3] = "Gotham City"


// Give D'Art a second hometown by adding "Hawkins"

dart.push("Hawkins")

console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

wolfy[0] = "Gameboy"

console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const Ninjaturtles = ["Donatello", "Leonardo", "Raphael", "Michealangelo"]

// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

for (let i = 0; i<= Ninjaturtles.length-1; i++) {
   console.log(Ninjaturtles[i].toUpperCase());
}



////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic

console.log(favMovies.indexOf('Titanic'));

// use the .sort method

// favMovies.sort();

// Thought question: what did this do to the array? Did it permanently alter it?

//it did not permanently alter it - but it sorted the elements in the array by alphabetical order

// Use the method pop

// favMovies.pop();


// push "Guardians of the Galaxy"

favMovies.push("Guardian Of The Galaxy");

// Reverse the array

// const reversed = favMovies.reverse();
// console.log(reversed)

// Use the shift method

const firstElement = favMovies.shift();

// console.log(favMovies)
// console.log(firstElement)

// unshift - what does it return?

//it returns the first element! 

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 

console.log(favMovies.indexOf("Django Unchained"))

favMovies.splice(2, 2, "Avatar")

// Thought question: did this permanently alter our array?

// yes, It replaced an existing element

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - 

console.log(favMovies.length)

// console.log(favMovies.slice(0, 9));

// Thought question: did this permanently alter our array?

//no, we console logged instead of editing the actual array.


// store the value of your slice in a variable, console.log it - Thought question: what is going on here?

    const favMoviesSliced = favMovies.slice(0, 9)

// console.log your final results

console.log(favMoviesSliced)

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

console.log(favMovies.indexOf("Fast And Furious"))

// it gives us -1

 
// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

//we could have but it wasn't necessary. We were accessing the elements in the ray and not the array itself or the variable. Const only applies to the variable, not the elements.

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

          
// Remove Eggbert (hint look at the slice/splice method(s))

console.log(whereIsWaldo.length)
console.log(whereIsWaldo.indexOf("Eggbert"));

const removeEggbert = whereIsWaldo.splice(1, 1)

console.log(whereIsWaldo)

// Change "Neff" to "No One"

whereIsWaldo[1][2] = "No One"

console.log(whereIsWaldo)

 
// Access and console.log "Waldo"

console.log(whereIsWaldo[2][1][1])

// console.log(whereIsWaldo)


////////////////////////////////
//  Excited Kitten
////////////////////////////////

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

const kittenSays = ["Love me, pet me! HSSSSSS!"]

const discontentKitten = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 0; i < 20; i++) {
    if (i < 20) {
         console.log(kittenSays)
    }
}


// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.


for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(kittenSays[0] + discontentKitten[Math.floor(Math.random() * discontentKitten.length)]);
    }
}
////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];


// Find the median number in the following nums array, then console.log that number.

nums.sort();
console.log(nums[Math.floor(nums.length/2)])
