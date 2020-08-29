import React, { Component } from 'react';
// import logo from './logo.svg';
import Container from './Container'
import Footer from './Footer'
import './App.css';

import { getAllStudents } from './Client';
import {
  Table,
  Avatar,
  Spin,
  Icon,
  Modal
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
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


const getIndicatorIcon = () => <LoadingOutlined style={{ fontSize: 24 }} spin />;
class App extends Component {
  state = {
    students: [],
    isFetching: false,
    isAddStudentModalVisisble: false
  }
  componentDidMount () {
    this.fetchStudents();
  }

  openAddStudentModal = () => this.setState({isAddStudentModalVisisble: true})
  closeAddStudentModal = () => this.setState({isAddStudentModalVisisble: false})

  fetchStudents = () => {
    this.setState ({
      isFetching: true
    });
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students);
        this.setState({
          students,
          isFetching: false
        });
    }))
  }
  render() {

    const { students, isFetching, isAddStudentModalVisisble } = this.state;
    if (isFetching) {
      return(
        <Container> 
          <Spin indicator={getIndicatorIcon()}/>
        </Container>
      );
    }
    if (students && students.length) {
      const columns = [
        {
          title: '',
          key: 'avatar',
          render: (text, student) => (
            <Avatar size='large'>
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          )
        },
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
      return (
        <Container>
          <Table dataSource = {students} 
                  columns = {columns}
                  pagination = {false}
                  rowKey = 'studentId'/>
          <Modal
            title = 'Add new student'
            visible = {isAddStudentModalVisisble}
            onOk={this.closeAddStudentModal}
            onCancel={this.closeAddStudentModal}
            width={1000}>
              <h1>Hello Modal with Antd</h1>
          </Modal>
          <Footer 
            numberOfStudents={students.length}
            handleAddStudentClickEvent={this.openAddStudentModal}
          />
        </Container>
      );
    }
    return (
      <h1>Nothing Found</h1>
    );
  }
  
}

export default App;
