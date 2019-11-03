const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback for admin page
router.get('/', (req, res) => {
  let queryText = 'SELECT id, feeling, understanding, support, comments, flagged FROM "feedback" ORDER BY id DESC;';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting books', error);
    res.sendStatus(500);
  });
});

// post feedback information from redux state on review page
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

// Delete intry from admin page
router.delete('/:id', (req, res) => {
  let queryText = `DELETE FROM feedback WHERE id = $1;`;
  pool.query(queryText, [req.params.id])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('Error in DELETE in feedback', error);
    res.sendStatus(500);
  })
})

// Flag entry from admin page
router.put('/:id', (req, res) => {
  let queryText = `UPDATE feedback SET flagged = NOT flagged WHERE id = $1;`;
  pool.query(queryText, [req.params.id])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('Error in PUT in feedback', error);
    res.sendStatus(500);
  })
})

module.exports = router;
