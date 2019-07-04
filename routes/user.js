const Router = require('express-promise-router')
const router = new Router()
const factorial = require('../build/Release/factorial')

module.exports = router

// render index page
router.get('/', (req, res) => {
	res.render('index')
})

// post factorial form
router.post('/v1/get/factorial', (req, res) => {

	if(req.body.ftext == "" || req.body.ftext == undefined){
		return res.status(400).json({"status": false, "message": "Please provide all parameters"})
	}

	let {ftext} = req.body

	ftext = parseInt(ftext)

	let result = factorial.factorial(ftext)
	
	result = result != Infinity ? result : "Infinity"

	return res.status(200).json({"status": true, "message": "Factorial for the provided number.", "data": result})

})