import React, {Component} from 'react';

class NameForm extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', essay: 'Write an essay about your favorite DOM element'};
  }

  handleChange = (event) => {
    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    console.log('Data was submitted: ' + this.state.name, this.state.essay );
    event.preventDefault();
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        <textarea name='essay' value={this.state.essay} onChange={this.handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default NameForm;
