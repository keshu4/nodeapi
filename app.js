const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const { process } = require("ipaddr.js");

const app = express()
app.use(cors);
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("<h1>GOURAB</h1>");
})

app.post('/', (req, res) => {
    var c1 = 0
    var c2 = 0
    var body = req.body;
    var f = true;
    odd = []
    even = []
    const n = body.length;
    for(let i = 0; i < n; i++){
        if(body[i] == parseInt(body[i])){
            if(parseInt(body[i] % 2)){
                odd[c1++] = parseInt(body[i]);
            }
            else{
                even[c2++] = parseInt(body[i]);
            }
        }
        else{
            f = false;
            break;
        }
    }
    if(f){
        const a = {
            is_sucess : f,
            user : "keshu",
            odd : odd,
            even : even
        }
        res.json(a)
    }
    else{
        const a = {
            is_sucess : f,
            user : "keshu"
        }
        res.json(a);
    }
})
const port = process.env.PORT || 6969;
app.listen(port, (req, res) => {
    console.log("server listening at 6969");
})