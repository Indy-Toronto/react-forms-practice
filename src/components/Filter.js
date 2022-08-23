
import {GrFormClose as Cross} from 'react-icons/gr';


export default function Filters(props){
    return <div className="filter">
        <p>{props.name}</p>
        < Cross />
    </div>
}