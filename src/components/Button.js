export default function Button(props){
    return <div className="button">
        <input type="radio" name="interests" value={props.value} id="" onChange={props.onChange}/>
        <label htmlFor="projects">{props.label}</label>
    </div>
}