const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
        'id':1,
        'image' :'https://picsum.photos/64/64',
        'name':'이은재',
        'number':'11111111',
        'age': '21'
      },
      {
        'id':2,
        'image' :'https://picsum.photos/64/64',
        'name':'이은재2',
        'number':'22222222',
        'age': '22'
      },
      {
        'id':3,
        'image' :'https://picsum.photos/64/64',
        'name':'이은재3',
        'number':'33333333',
        'age': '23'
      }
      ]);
})

app.listen(port,() => console.log(`Listening on port ${port}`));