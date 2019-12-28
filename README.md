
What is Node.js?

* Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine).

* Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

* Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

###>>  Node.js = Runtime Environment + JavaScript Library



Features:

* Asynchronous and Event Driven
* Very Fast 
* Single Threaded but Highly Scalable 
* No Buffering
* License



Concepts:

![alt text](https://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg)


Where to Use Node.js?

* I/O bound Applications
* Data Streaming Applications
* Data Intensive Real-time Applications (DIRT)
* JSON APIs based Applications
* Single Page Applications

Where Not to Use Node.js?

* Node is, despite its asynchronous event model, by nature single threaded. When you launch a Node process, you are running a single process with a single thread on a single core. So your code will not be executed in parallel, only I/O operations are parallel because they are executed asynchronous. As such, long running CPU tasks will block the whole server and are usually a bad idea.
* Given that you just start a Node process like that, it is possible to have multiple Node processes running in parallel though. That way you could still benefit from your multithreading architecture, although a single Node process does not. You would just need to have some load balancer in front that distributes requests along all your Node processes.
* Another option would be to have the CPU work in separate processes and make Node interact with those instead of doing the work itself.

  
