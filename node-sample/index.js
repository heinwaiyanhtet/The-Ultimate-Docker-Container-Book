const express = require('express');
const app = express();

const hobbies = 
[
    'Swimming', 'Diving', 'Jogging', 'Cooking', 'Singing'
];

app.get('/hobbies', (req,res) =>
{
    res.send(hobbies);
})


app.listen(3000,'0.0.0.0',() => {
    console.log("application is listening at 0.0.0.0:3000");
})

app.get('/',(req,res) => {
    res.send('Sample application: Hello World!');
})

