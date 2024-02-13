
import './App.css';
import Customer from './components/Customer';

const customers =[
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
]

function App() {
  return (
    <div>
    {
      customers.map(c =>{
        return <Customer 
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        age={c.age}>
        </Customer>
      })
    }
    </div>
  );
}

export default App;
