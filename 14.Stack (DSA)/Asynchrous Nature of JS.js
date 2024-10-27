console.log("Asynchrous Nature of JS.");

setTimeout( () => {
    console.log("Chandan");
   }, 2000);

   setTimeout( () => {
       console.log("Chaudhary");
      }, 2000);

console.log("Name :");

/* 
    Question:- JS is a Single threaded language But why it Excute the line no. 9 code first?
                                        or
    Question:- JS is a Single threaded language But why it work like multithreaded?
    Answer:- Because Browser & Node.js are written in C++ or Java Language and they are Multithreaded.
            So this code in browser work like multithreaded.

*/

// Synchrous or Single threaded Nature --> Code Execute line by Line
// Asynchrous or Multi threaded Nature --> Code can Execute external thing simultaneously