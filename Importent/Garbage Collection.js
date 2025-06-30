    let obj1 = { name: 'Mayank' };  // Object 1 created
    let obj2 = { name: 'Love' };  // Object 2 created

    obj1.reference = obj2;  // Object 1 now references Object 2
    obj2.reference = obj1;  // Object 2 now references Object 1

    // At this point, both obj1 and obj2 are still in use and have references to each other

    obj1 = null;  // Removing reference to Object 1
    obj2 = null;  // Removing reference to Object 2

    console.log(obj1);

    // Even though we've removed the references to obj1 and obj2,
    // the JavaScript engine can still identify that these objects are not reachable
    // from the root of the application (global scope or any other reachable objects)
    // and will automatically deallocate the memory occupied by these objects.