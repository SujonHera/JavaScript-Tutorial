let date = new Date()
let day = date.getDay()
console.log(day);
// sunday - 0, monday- 1, tuesday - 2, wednesday - 3, thursday -4, friday -5, saturday -6

switch (day) {
    case 0:
        console.log("Today is Sunday")
        break;
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday")
        break;
    case 3:
        console.log("Today is Wednesday")
        break;
    case 4:
        console.log("Today is Thursday")
        break;
    case 5:
        console.log("Today is Friday")
        break;
    default:
        console.log("Today is Saturday")
        break;
}