
let tweets = [
{
tweet: "Today is a beautiful day!",
username: "john123",
created_at: "10-01-2026",
age: 25
},
{
tweet: "I love learning JavaScript!",
username: "sarah_dev",
created_at: "10-02-2026",
age: 19
},
{
tweet: "Playing soccer with my friends.",
username: "mike10",
created_at: "10-03-2026",
age: 16
},
{
tweet: "Enjoying my weekend!",
username: "emma22",
created_at: "10-04-2026",
age: 30
},
{
tweet: "School was fun today.",
username: "alex15",
created_at: "10-05-2026",
age: 15
},
{
tweet: "Working on a new project.",
username: "coder25",
created_at: "10-06-2026",
age: 25
},
{
tweet: "I like playing video games.",
username: "sam12",
created_at: "10-07-2026",
age: 12
},
{
tweet: "Learning something new every day.",
username: "linda20",
created_at: "10-08-2026",
age: 20
},
{
tweet: "My favorite subject is science.",
username: "noah17",
created_at: "10-09-2026",
age: 17
},
{
tweet: "Have a great day everyone!",
username: "david35",
created_at: "10-10-2026",
age: 35
}
];



console.log("Tweets from users who are at least 18:");

let i = 0;

// Continue while there are tweets left in the array.
while (i < tweets.length) {

// Check if the user's age is 18 or older.
if (tweets[i].age >= 18) {

    // Display the tweet, username, and creation date.
    console.log("Tweet: " + tweets[i].tweet);
    console.log("Username: " + tweets[i].username);
    console.log("Created at: " + tweets[i].created_at);
    console.log("--------------------");
}

// Move to the next tweet.
i++;

}

// Step 3: Use a for loop to display tweets from users under 18.

console.log("Tweets from users who are under 18:");

// Go through every tweet in the array.
for (let j = 0; j < tweets.length; j++) {

// Check if the user's age is under 18.
if (tweets[j].age < 18) {

    
    console.log("Tweet: " + tweets[j].tweet);
    console.log("Username: " + tweets[j].username);
    console.log("Created at: " + tweets[j].created_at);
    console.log("--------------------");
}

}