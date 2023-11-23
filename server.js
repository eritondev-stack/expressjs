var express = require('express')
var cookieParser = require('cookie-parser')
var cors = require("cors")
var app = express()


app.use(cors({
  preflightContinue: true,
  credentials: true,
  origin: "*"
}));

app.use(cookieParser())

app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
  res.cookie('teste-cookies-1', 'eriton', { maxAge: 900000, httpOnly: false, secure: false });
  return res.status(200).send("Cheguei aqui cookies")
})

app.get('/teste', function (req, res) {
  return res.status(200).send("Cheguei aqui teste")
})

app.get('/receive', function (req, res) {
  res.cookie('teste-cookies-2', 'eriton', { maxAge: 900000, httpOnly: false });
  return res.status(200).send("Cheguei aqui receive")
})

app.listen(3000, () => {
  console.log("Server running in 3000...")
})
