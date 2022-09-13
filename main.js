import { id } from "./components/uuidTest";
import { numsArrClass } from "./components/arrayHandler";

// GLOBALS
const eleQs = (ele) => document.querySelector(ele);

// VARS
const numbers = new numsArrClass(1, 2, 3);

// CODE
eleQs("#app").innerHTML = `<p>Unique Id: ${id}</p>
      <p>Sum of arr [1,2,3]: ${numbers.reduceSum()}</p>
`;
