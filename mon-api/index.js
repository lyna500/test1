import express from "express"

const app = express()
app.use(express.json())

app.get("/test/:id", (req, res) => {
   fetch("https://jsonplaceholder.typicode.com/posts/1")
   .then(res  => res.json())
.then(data => response.json(data))
  
})

app.listen(3000, () => console.log("http://localhost:3000"))
