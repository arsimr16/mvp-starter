// set up mongoose connection with existing mongo database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


// Set up schema for all models
var topicSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  description: String
});

// Create model (table) for each topic
var Convstarts = mongoose.model('Convstarts', topicSchema);
var Jokes = mongoose.model('Jokes', topicSchema);
var Quotes = mongoose.model('Quotes', topicSchema);
var Pickups = mongoose.model('Pickups', topicSchema);


// arrays containing data for each table
var convStartsArr = ['Do you play any instruments?', 'Do you have any siblings?', 'What is the wierdest dream you can remember?', 'What was your first job?', 'Do you play any sports?', 'What type of music do you listen to?', 'What is the best piece of advice you\'ve received?', 'What is your favorite board game?', 'If you had a million dollars but could only spend it in one store, where would you spend it?', 'What is your favorite season?'];
var jokesArr = ['Two satellites decided to get married. The wedding wasn\'t much, but the reception was incredible!', 'Why can\'t you hear a pterodactyl go to the bathroom? Because the pee is silent', 'Why couldn\'t the bicycle stand up by itself? Because it was two tired', 'If you see a robbery at an Apple store, does that make you an iWitness?', 'A termite walks into a bar and asks, "Is the bar tender here?"', 'Two goldfish are in a tank. One says to the other, "Do you know how to drive this thing?"', 'How do you organize an outer space party? You planet.', 'What do you call a fish with no eyes? A fsh.', 'I gave all my dead batteries away today... free of charge', 'Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan.'];
var quotesArr = ['Don\'t cry because it\'s over, smile because it happened. ~Dr. Seuss', 'A room without books is like a body without a soul. ~ Marcus Tullius Cicero', 'Keep your face always toward the sunshine - and shadows will fall behind you. ~Walt Whitman', 'Not all those who wander are lost. ~ J.R.R. Tolkien', 'Whoever is happy will make others happy too. ~Anne Frank', 'The secret of getting ahead is getting started. ~Mark Twain', 'In three words I can sum up everything I\'ve learned about life: it goes on. ~ Robert Frost', 'Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down. ~Oprah Winfrey', 'Set the controls for the heart of the sun. ~Pink Floyd', 'Then as it was, then again it will be; though the course may change sometimes, rivers always reach the sea. ~Led Zeppelin'];
var pickupsArr = ['Are you a magician? Because whenever I look at you, everyone else disappears!', 'If you were a vegetable, you\'d be a cute-cumber', 'Do you live in a corn field, cause I\'m stalking you.', 'Are you a parking ticket? Cause you\'ve got fine written all over you.', 'I seem to have lost my phone number. Can I have yours?', 'Have you been to the doctor lately? Cause I think you\'re lacking some Vitamin Me.', 'You\'re so beautiful that you made me forget my pickup line.', 'Are you a banana? Cause I find you a-peeling.', 'My love for you is like diarrhea, I just can\'t hold it in.', 'Can I borrow a kiss? I promise I\'ll give it back.'];

// create a document (row) for each conversation starter
convStartsArr.forEach((starter, i) => {
  let newStarter = new Convstarts({description: starter, id: i});
  newStarter.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

// create a document (row) for each joke
jokesArr.forEach((joke, i) => {
  let newJoke = new Jokes({description: joke, id: i});
  newJoke.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

// create a document (row) for each quote
quotesArr.forEach((quote, i) => {
  let newQuote = new Quotes({description: quote, id: i});
  newQuote.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});

// create a document (row) for each pickup line
pickupsArr.forEach((pickup, i) => {
  let newPickup = new Pickups({description: pickup, id: i});
  newPickup.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
});




// invokes a callback on a randomly chosen item from a the Convstarts table
var selectRandomStarter = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Convstarts.find({id: randomId}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

// invokes a callback on a randomly chosen item from a the Jokes table
var selectRandomJoke = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Jokes.find({id: randomId}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

// invokes a callback on a randomly chosen item from a the Jokes table
var selectRandomQuote = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Quotes.find({id: randomId}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

// invokes a callback on a randomly chosen item from a the Jokes table
var selectRandomPickup = function(callback) {
  randomId = Math.floor(Math.random() * 10);
  Pickups.find({id: randomId}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items[0].description);
    }
  });
};

module.exports.selectRandomStarter = selectRandomStarter;
module.exports.selectRandomJoke = selectRandomJoke;
module.exports.selectRandomQuote = selectRandomQuote;
module.exports.selectRandomPickup = selectRandomPickup;