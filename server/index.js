const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./connection');
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/get', (req   , res) => {
   const query =
      "select * from MOVIE_REVIEWS"
   connection.query(query,
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Review Fetched Successfully", "products": results })
         }
         else {
            return res.status(500).json({ message: "failed" })
         }
      });
})



app.post('/api/insert', (req, res) => {
   let product = req.body
   const query =
      "INSERT INTO MOVIE_REVIEWS (movie_name,movie_review) VALUES (?,?);"
   connection.query(query, [product.movieName, product.review],
      (err, results) => {
         if (!err) {
            return res.status(200).json({ message: "Review Added Successfully", "products": results })
         }
         else {
            return res.status(500).json({ message: "failed" })
         }
      });
})


app.listen(3001, () => { console.log(`running on port 3001`) })