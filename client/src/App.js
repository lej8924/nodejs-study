
import './App.css';
import Customer from './components/Customer';

import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { withStyles } from '@mui/material/styles';
import { Component } from 'react';

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


class App extends Component{
  state = {
    customers : ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    return(
    <Paper>
      <Table>
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
          {this.state.customers ? this.state.customers.map(c => {
            return <Customer 
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            age={c.age}
            number={c.number}>
            </Customer>
            }) : ""}
        </TableBody>
      </Table>
    </Paper>
    )
  }
}

export default App;
