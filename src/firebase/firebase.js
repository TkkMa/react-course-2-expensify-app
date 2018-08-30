import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export{ firebase, database as default };
// child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added - gets called for existing and new children
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })



// database.ref('expenses')
//     .on('value', (snapshot)=>{
//         const expenses=[];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses =[];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });
// Setup 'expenses' with three items (description, note, amount, createdAt)
// database.ref('expenses').push({
//     description: 'tea',
//     note: '',
//     amount: '2.50',
//     createdAt: 98798234
// });



// database.ref('notes/-LL35jDO9QI5fth-xVzp').update({
//     body: 'Buy food'
// });
// database.ref('notes').push({
//     title: 'first note!',
//     body: 'This is my note'      
// });

// const firebaseNotes = {
//     notes:{
//         asdfdassa:{
//             title: 'first note!',
//             body: 'This is my note'
//         },
//         asfdsaf:{
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };


// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data', e);
//     });

// Setup data sub -> Andrew is a Software Developer at Amazon.
// Change the data and make sure it reprints
// database.ref().on('value', (snapshot)=>{
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// })


// const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// }, (e) =>{
//     console.log('Error with data fetching', e)
// });

// setTimeout(()=>{
//     database.ref('age').set(32);
// }, 3500)

// setTimeout(()=>{
//     database.ref('age').off(onValueChange);
// }, 7000)

// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 10500)

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('This failed.', e);
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
// // database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('California');

// database.ref('attributes').set({
//     height: '164cm',
//     weight: '55kg'
// }).then(()=>{
//     console.log('attributes saved')  
// }).catch((e)=>{
//     console.log(e);
// })
// database.ref('isSingle').remove().then(()=>{
//     console.log('Remove succeeded')
// }).catch((e)=>{
//     console.log('Remove failed')
// });

// database.ref('isSingle').set(null);