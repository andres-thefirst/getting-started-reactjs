import React, {Component} from 'react';

class ListComponent extends Component {

  constructor(props) {
    super(props);
    this.list = ['Java', 'Javascript', 'Python', 'C#', 'Ruby'];
    this.listItems = this.list.map((value) => (
      <li key={value}>{value}</li>
    ));
  }

  render = () => (
    <ul>{this.listItems}</ul>
  );
}

export default ListComponent;
