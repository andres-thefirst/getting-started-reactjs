import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import ListComponent from './ListComponent';
import NameForm from './NameForm';
import './index.css';

function Welcome(props) {
  return (<h1><i>Welcome</i> my friend {props.name}</h1>);
}

function format(user) {
  return user.firstName  + ' ' + user.lastName;
};

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <div>
    <h1>
      Hello, world! {format(user)}
    </h1>
    <Welcome name="Ralf" />
    <Clock />
  </div>);

  function getGreeting(user){
    if (user) {
      return element;
    }
    return (<h1>Hello, Stranger.</h1>);
  };

ReactDOM.render(
  <div>
  {getGreeting(user)}
  <ListComponent />
  <NameForm />
  </div>,
  document.getElementById('root')
);
