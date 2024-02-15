
import './App.css';
import Customer from './components/Customer';

import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { withStyles } from '@mui/material/styles';

const styles = theme => ({
  root:{
    width : '100%',
    marginTop: theme.spacing.unit*3,
    overflowX : "auto"
  },
  table:{
    minwidth : 200
  }
})

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
  const { classes } = this.props;
  return (
    <Paper className = { classes.root }>
      <Table className = { classes.table }>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>학번</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
        customers.map(c =>{
          return <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          age={c.age}
          number={c.number}>
          </Customer>
        })
      }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
