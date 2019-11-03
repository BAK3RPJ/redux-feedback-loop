const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT id, feeling, understanding, support, comments FROM "feedback" ORDER BY id DESC;';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting books', error);
    res.sendStatus(500);
  });
});


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

router.delete('/:id', (req, res) => {
  let queryText = `UPDATE FROM feedback WHERE id = $1;`;
  pool.query(queryText, [req.params.id])
  .then(result => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('Error in DELETE in feedback', error);
    res.sendStatus(500);
  })
})

module.exports = router;
