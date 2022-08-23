export default function InputLabel(props){
    return <div className="inputLabel">
        <label htmlFor="">{props.label}</label>
        <input type={props.type} name={props.name} value='' onChange={props.onChange} />
    </div>
}