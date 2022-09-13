import { id } from "./components/uuidTest";
import { numsArrClass } from "./components/arrayHandler";

// GLOBALS
const eleQs = (ele) => document.querySelector(ele);

// VARS
const arr = [4, 8, 9];
const numbers = new numsArrClass(...arr);

// CODE
eleQs("#app").innerHTML = `<p>Testing_Unique_Id: ${id}</p>
      <p>Sum of arr ( ${arr} ): ${numbers.reduceSum()}</p>
`;
