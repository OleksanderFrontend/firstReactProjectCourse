import { Component, useLayoutEffect } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John S.', salary: 1000, increase: false, rise: true, id: 1 },
        { name: 'Carl I.', salary: 800, increase: true, rise: false, id: 2 },
        { name: 'Alex M.', salary: 500, increase: false, rise: false, id: 3 }
      ],

      term: '',
      click: ''
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {

    const maxId = this.state.data.length;
    const newEmployee = {
      name,
      salary,
      rise: false,
      increase: false,
      id: maxId + 1
    }

    this.setState(({ data }) => {
      return {
        data: [...data, newEmployee]
      }
    });



    // for(let key in newElem) {
    //   if(!newElem[key]) {
    //     newElem[key] = "Error"
    //   }
    // }
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => (
      {
        data: data.map(item => {
          return item.id === id ? { ...item, [prop]: !item[prop] } : item;
        })
      }
    ))
  }


  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  onFilters = (items, elem) => {
    switch (elem) {
      case 'increase':
        return items.filter(item => item.increase);

      case 'all':
        return items

      case 'salary':
        return items.filter(item => item.salary > 1000);

      default:
        return items
    }
    
    // if (elem === 'increase') {
    //   return items.filter(item => item.increase);
    // } else if (elem === 'all') {
    //   return items
    // } else if (elem === 'salary') {
    //   return items.filter(item => item.salary > 1000);
    // } else if (term.length > 0) {
    //   return items.filter(item => item.name.indexOf(term) > -1)
    // } else {
    //   return items
    // }


  }
  onUpdateClick = (click) => {
    this.setState({ click })
  }


  render() {
    const { data, term, click } = this.state;
    const total = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;

    const visibleData = this.onFilters(data, click);
    console.log(visibleData);


    return (
      <div className="app">
        <AppInfo totalEmployees={total}
          increaseEmployees={increased} />

        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            onFilter={this.onFilters}
            onUpdateClick={this.onUpdateClick} />
        </div>

        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>

    )
  }
}

export default App;