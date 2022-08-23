export default function Button(props){
    return <div className="button">
        <input type="radio" name="projects" id="" />
        <label htmlFor="projects">{props.label}</label>
    </div>
}