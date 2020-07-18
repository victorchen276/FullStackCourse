import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { getAllStudents } from './Client'
import {
  Table
} from 'antd'
/*
function App() {
  getAllStudents().then(res => res.json().then(stuedents => {
    console.log(stuedents);
  }))
  return (
    <h1>Hello World</h1>
  );
}
*/
class App extends Component {
  state = {
    students: []
  }
  componentDidMount () {
    this.fetchStudents();
  }
  fetchStudents = () => {
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students);
        this.setState({
          students
        });
    }))
  }
  render() {
    const { students } = this.state;
    if (students && students.length) {
      // return students.map((student, id) => {
      //   return (
      //     <div key={id}> 
      //       <h2>{student.studentId}</h2>
      //       <p>{student.firstName}</p>
      //       <p>{student.lastName}</p>
      //       <p>{student.gender}</p>
      //       <p>{student.email}</p>
      //     </div>
      //   );
      // })
      const columns = [
        {
          title: 'Student Id',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName'
        }
      ];
      return <Table dataSource={students} columns={columns} rowKey='studentId' />;
    }
    return (
      <h1>Nothing Found</h1>
    );
  }
  
}

export default App;
