import EmployersItem from "../employers-item/employers-item";
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp}) => {
  const components = data.map(item => {
   const {id, ...itemProps} = item; 
     return <EmployersItem key={id} 
                           {...itemProps}
                           onDelete={() => onDelete(id)}
                           onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
                           
  }
)
  
  return <ul className="app-list list-group">
            {components}
         </ul>
}

export default EmployersList;

