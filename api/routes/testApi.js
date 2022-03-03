let express = require( 'express' );
let router = express.Router();

router.get("/check/api", function(req, res, next){
    res.send("API is working")
});

module.exports = router