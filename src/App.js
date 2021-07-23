import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

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
    'id': 1,
    'img': 'https://placeimg.com/64/64/any3',
    'name': '홍길동2',
    'birthday': '8901',
    'gender': '남자',
    'job': '대학생'
}
]
class App extends Component {
    render() {
        return (
        <div>
        {
            customers.map(c => {
                return(
                    <Customer
                        key={c.id}
                        id = {c.id}
                        img={c.img}
                        name={c.name} 
                        birthday={c.birthday} 
                        gender={c.gender} 
                        job={c.job}/>
                );
            })
        }
       </div>  
        );
    }
}
export default App;
