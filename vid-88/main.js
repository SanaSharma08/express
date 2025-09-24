const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!123')
})
app.get('/about', (req, res) => {
  res.send('About Us')
})
app.get('/contact', (req, res) => {
  res.send('Contact Me')
})
app.get('/blog', (req, res) => {
  res.send('Hello Blog')
})

//parameter
app.get('/blog/:slug/:second', (req, res) => {
    console.log(req.params) // { slug: 'harry', second: 'coding' }
    console.log(req.query) // For URL : http://127.0.0.1:3000/blog/harry/coding/?mode=dark&region=in
    //output : { mode: 'dark', region: 'in' }
  res.send(`Intro to ${req.params.slug} and ${req.params.second}.`)
  //http://127.0.0.1:3000/blog/harry/coding will give Intro to harry and coding.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
