const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

//Use static files
app.use(express.static("public"))

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/signup.html")
})

app.listen(3000, function () {
	console.log("Server is running on port 3000")
})
