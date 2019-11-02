const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all books
// router.get('/', (req, res) => {
//   let queryText = 'SELECT title, author FROM "books" ORDER BY "title";';
//   pool.query(queryText).then(result => {
//     // Sends back the results in an object
//     res.send(result.rows);
//   })
//   .catch(error => {
//     console.log('error getting books', error);
//     res.sendStatus(500);
//   });
// });

// Adds a new book to the list of awesome reads
// Request body must be a book object with a title and author.
router.post('/',  (req, res) => {
  let feedback = req.body;
  console.log(`Adding feedback`, feedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
