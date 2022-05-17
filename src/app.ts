import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne:HasFormatter;
// let docTwo:HasFormatter;

// docOne=new Invoice("yoshi", "web work", 250);
// docTwo=new Payment("mario", "plumbing work", 200);

// let docs: HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);


// interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson={
//     name: "joshua",
//     age: 30,
//     speak(text: string):void{
//         console.log(text);
//     },
//     spend(amount: number):number{
//         console.log("I spent", amount);
//         return amount;
//     }
// }

// const greetPerson=(person: IsPerson)=>{
//     console.log("Hello", person.name)
// }

// greetPerson(me)

// const invOne=new Invoice("mario", "buy a yatch", 200)
// const invTwo=new Invoice("luigi", "buy a yatch", 250)


// const invoices: Invoice[]=[];
// invoices.push(invOne)
// invoices.push(invTwo)
// //console.log(invoices)


// invoices.forEach(inv=>{
//     console.log(inv.client, inv.amount, inv.format())
// })

const form=document.querySelector(".new-item-form") as HTMLFormElement;


const type=document.querySelector("#type") as HTMLSelectElement;
const tofrom=document.querySelector("#tofrom") as HTMLInputElement;
const details=document.querySelector("#details") as HTMLInputElement;
const amount=document.querySelector("#amount") as HTMLInputElement;


const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let values:[string, string, number];
    values=[tofrom.value, details.value, amount.valueAsNumber]
    let doc: HasFormatter;

    if(type.value==="invoice"){
        doc=new Invoice(...values)
    }else{
        doc=new Payment(...values)
    }

    list.render(doc, type.value, "end")
})



//GENERICS

/*const addUID= <T>(obj: T)=>{
    let uid=Math.floor(Math.random()*100);
    return {...obj, uid}
}


let docThree=addUID({name: "yoshi", age: 40});

console.log(docThree);


interface Resource <T>{
    uid: number;
    resourceName: string;
    data: T;
}

const docFour: Resource <object>= {
    uid: 1,
    resourceName: "person",
    data: {name: "me"}
}


const docFive: Resource <string[]>={
    uid: 5,
    resourceName: "shoppingList",
    data: ["bread", "milk"]
}


console.log(docFour, docFive)
*/

//GENERICS END



// //ENUMS

/* enum ResourceType{BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource <T>{
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docSix: Resource <object>= {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {name: "me"}
}


const docSeven: Resource <object>={
    uid: 5,
    resourceName: ResourceType.DIRECTOR,
    data: {name: "Ebuka"}
}


console.log(docSix, docSeven)
*/
//ENUMS END


//TUPLES

//let tup: [string, number, boolean]=["ryu", 27, true]

//TUPLES END