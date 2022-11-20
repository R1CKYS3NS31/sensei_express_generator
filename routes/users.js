var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Respond to POST request on the root route (/user), the application’s home page:

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// Respond to a PUT request to the /user route:

app.put('/', (req, res) => {
  res.send('Got a PUT request at /user')
})

// Respond to a DELETE request to the /user route:

app.delete('/', (req, res) => {
  res.send('Got a DELETE request at /user')
})


module.exports = router;
