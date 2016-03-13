var express = require('express');
var router = express.Router();
var yahooFinance = require('yahoo-finance');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valuwize' , result:''});
});

//This request is made when the user clicks the serch button
router.post('/getValuation', function(req, res) {
	var query = req.body.tickerValue;
	yahooFinance.historical({
	  symbol: query,
	  from: '2007-01-01',
	  to: '2016-01-01',
	   period: 'm'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
	}, function (err, quotes) {
	  console.log(quotes);
	  res.render('index', { title: 'Valuwize' , result:quotes});
	});

});



module.exports = router;
