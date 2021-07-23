import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
    }
})
const customers =[
{
    'id': 1,
    'img': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '1234',
    'gender': '남자',
    'job': '대학생'
},
{
    'id': 2,
    'img': 'https://placeimg.com/64/64/2',
    'name': '홍길동1',
    'birthday': '4567',
    'gender': '남자',
    'job': '대학생'
},
{
    'id': 3,
    'img': 'https://placeimg.com/64/64/any3',
    'name': '홍길동2',
    'birthday': '8901',
    'gender': '남자',
    'job': '대학생'
}
]
class App extends Component {
    render() {
        const {classes} = this.props;
        return (        
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableCell>id</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
        {
            customers.map(c => {return(<Customer key={c.id} id = {c.id} img={c.img} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); })
        }
        </TableBody>
        </Table>
       </Paper>  
        );
    }
}
export default withStyles(styles)(App);
