/* 
JAVASCRIPT EXECUTION CONTEST (Important for Interview) 

1) {} - Global Exectuion contest - by "this"
2) Function Execution contest
3) Eval Execution contest

Q) How the code in javascript is executed
Ans- It basically runs in the two phases 
    1) Memory Creation Phase
    2) Execution Phase


    See the diagram in the uploaded png file 



    Also when it is done , the new variable environment that is created is now "deleted"


--------Call stack ----------

It runs on the LIFO principle

-------------------------------

JavaScript is:

Single-threaded (one command at a time)

Synchronous by default

Non-blocking (thanks to the event loop for async tasks)




---------Conclusion-----------

"JavaScript runs code using execution contexts and a single-threaded call stack. The global context is created first. Every time a function is called, a new execution context is pushed onto the call stack. When the function finishes, it is popped off. JavaScript executes code synchronously, line-by-line, 
and uses the call stack to manage function calls."



*/

