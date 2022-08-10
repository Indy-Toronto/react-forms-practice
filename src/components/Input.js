
import { BiHide as eye }  from 'react-icons/bi';

export default function Input(props){
    return <input type="text" placeholder={props.heading} className='first-four' name={props.name} value={props.value} onChange={props.onChange}/>
    
}