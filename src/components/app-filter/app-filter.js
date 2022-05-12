import { Component } from "react";
import './app-filter.css';


class AppFilter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      click: ''
    }
  }
  btnOnClick = (e) => {
    const btnClick = e.target.getAttribute('data-filter')
    this.setState({click: btnClick})
    this.props.onUpdateClick(btnClick)

  }

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          onClick={this.btnOnClick}
          data-filter="all">
          Все сотрудники
        </button>

        <button
          className="btn btn-outline-light"
          type="button"
          onClick={this.btnOnClick}
          data-filter="increase">
          На повышения
        </button>

        <button
          className="btn btn-outline-light"
          type="button"
          onClick={this.btnOnClick}
          data-filter="salary">
          З/П больше 1000$
        </button>
      </div>
    );
  }

}

export default AppFilter