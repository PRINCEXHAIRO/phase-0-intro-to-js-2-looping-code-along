// Code your solutions in this file
for (let age = 31; age < 40 ; age++) { 
       console.log(`I'm ${age} years old today! Happy birthday to me!`) 
       debugger; 
}; 


const gifts = ["teddy bear", "drone", "sneakers"];

function wrapGifts(gifts) { 
       for(let i = 0; i < gifts.length; i++) { 
              console.log(`Wrapped ${gifts[i]} and added a bow! `)
              debugger; 
       };
       return gifts; 

}; 
wrapGifts(gifts);

const names = ["Ruva", "Krystel", "Shalika"]; 
const eventName = ["Apple", "Cisco", "BlackGirlsCode"];

function writeCards(names, eventName) {
       for (let i = 0; i < names.length; i++ ){
              console.log(`Thank you ${names[i]} for the inspirational talk at the ${eventName[i]} event!`)
              debugger; 
       };
       return names;
};
writeCards(names, eventName)

function countDown(){ 
       let Number = 9; 
       while (Number < 10) {
       console.log(Number--) 
       }
};

console.log(countDown(9))

const books = ["Think & Grow Rich", "Alchemist", "Basqiaut AutoBio "]
function readThisBook (bookName){
       for (let i = 0; i < books.length; i++) {
              console.log(`This Book ${bookName[i]} is one of my favorites`) 
              debugger;
       };
       return books;
};

console.log(readThisBook(books));
