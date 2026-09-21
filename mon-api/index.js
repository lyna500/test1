import express from "express"


function cors(req,res,next){
   res.set('access-Control-Allow-Origin','*')
   res.set('access-Control-Allow-Methods','*')
   res.set('acess-Control-Allow-Headers','Content-Type, x-api-key')
   next()
}
const app=express()
app.use(cors)
app.use(express.json())
appapp.get("/test/:id", (req, res) => {
   fetch("https://jsonplaceholder.typicode.com/posts/1")
   .then(res  => res.json())
   .then(data => response.json(data))
  
})

app.listen(3000, () => console.log("http://localhost:3000"))
