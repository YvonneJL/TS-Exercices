//&Enum-TS-Level-1_1
console.log("Enum-TS-Level-1_1");

import {Weekday, Months} from "./enums.ts"

//..Weekdays
//- über Index an den tatsächlichen Wert
console.log(Weekday[Weekday.Monday]);
console.log(Weekday[Weekday.Tuesday]);
console.log(Weekday[Weekday.Wednesday]);
console.log(Weekday[Weekday.Thursday]);
console.log(Weekday[Weekday.Friday]);
console.log(Weekday[Weekday.Saturday]);
console.log(Weekday[Weekday.Sunday]);

//hier als Zahlen(index)
console.log(Weekday.Monday);
console.log(Weekday.Tuesday);

//..Months
console.log(Months[Months.January]);
console.log(Months.January);