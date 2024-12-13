// Switch to using environment variables for sensitive data

let marks:number = 101

switch(true){
    case marks >80 && marks<=100:
        console.log("your grade is A");
        break;
        case marks >70 && marks<=80:
        console.log("your grade is B");
        break;
        case marks >60 && marks<=70:
        console.log("your grade is C");
        break;
        case marks >=50 && marks<=60:
        console.log("your grade is D");
        break
    default:
        console.log("Your number is incorrect");
        break;
}

































// let grade:string = "d";

// switch (grade){
//     case "A":
//         console.log("Your performace is Excellent");
//         break;
//         case "B":
//             console.log("your performance is Good");
//             break;
//             case "C":
//                 console.log("You need to improve your performance knowing your weaknesses  ");
//                 break;
//                 case "D":
//                     console.log("Please Study Hard");
//                     break;
//                 default:
//                     console.log("Your grade is incorrect.Please check your grade ");
//                     break;
// }