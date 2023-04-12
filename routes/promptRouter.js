const router = require('express').Router();

router.get('/test', async (request, response) => {
  response.send('완료');
});

module.exports = router;
