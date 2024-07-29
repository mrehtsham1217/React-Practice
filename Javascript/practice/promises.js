// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Promises are used for Db operations,Network calls
//         console.log('Promise One Resolved');
//         resolve()
//     }, 2000);

// })

// promiseOne.then(() => {
//     console.log("Main function");
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise Two Resolved');
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log("2nd main function");
// })


// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Ehtsham", password: "12345" })
//         } else {
//             reject("Error...Something went wrong...")
//         }
//     },1000)
// })

// promiseTwo.then((user) => {
//     console.log(user);
//     return user.username
// })
//     .then((username) => {
//     console.log(`Hello ${username}!`);
//     })
//     .catch((error) => {
//     console.log(error);
//     })
//     .finally(() => {
//     console.log("Promise execution finished.");
//     })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Ehtsham", password: "12345" })
//         } else {
//             reject("Error...Something went wrong...")
//         }
//     },1000)
// })

// async function promiseExe() {
//     try {
//         const user = await promiseThree;
//         console.log(user);
//         console.log(`Hello ${user.username}!`);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Promise execution finished.");
//     }
// }


// promiseExe();


// async function getAllUsers() {
//     try {
        
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         data = await response.json()
//         console.log(data);
//     } catch(error) {
//         console.log("Error fetching users...",error);
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    return response.json()
    })
    .then((data) => {
    console.log(data);
    })
    .catch((error) => {
    console.log(error);
})