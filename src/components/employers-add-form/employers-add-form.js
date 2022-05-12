import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      border: false
    }
  }

  onValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) {
      this.setState({
        border: !this.state.border
      })
      return
    }
    
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: ''
      })
    



  }

  render() {
    const { name, salary, border } = this.state;

    let borderInput = "form-control new-post-label";

    if(border) {
      borderInput += ' validation-border';
    }
    
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
            className={borderInput}
            placeholder="Как его зовут?"
            onChange={this.onValue}
            name="name"
            value={name}/>
          <input type="number"
            className={borderInput}
            placeholder="З/П в $?"
            onChange={this.onValue}
            name="salary"
            value={salary}/>

          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }

}

export default EmployersAddForm;