const express = require('express')
const app = express()
const port = 8000

var thenify = require('thenify') // vulnerable module

app.get('/', (req, res) => {
    res.send(`thenify:3.3.0 was loaded during startup. It contains the vulnerability: <a href="https://snyk.io/vuln/SNYK-JS-THENIFY-571690">SNYK-JS-THENIFY-571690</a> (CVE-2020-7677).`)
})

function dummy() {
    console.log("Triggering thenify:3.3.0")
}

app.listen(port, () => {
    thenify(dummy)()
    console.log(`Sample app listening at http://localhost:${port}`)
})
