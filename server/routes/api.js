let express = require( 'express' );
let router = express.Router();

// Route
router.get('/ping', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});
router.get('/testApi', (req, res) => {
  res
    .send("API is working")
    .status(200);
});

router.get("/check", function(req, res, next){
    res.send("API is working")
});

module.exports = router;