import InputLabel from "./InputLabel";
import Button from "./Button";
import CreateAccount from "./CreateAccount";
import Filters from "./Filter";
import React from "react";
export default function WhitePart() {

  const [input, setInput] = React.useState({
    interests:'',
    email:'',
    password:'',
    skills:''
  })
  // console.log(input)

  function recordData(e) {
    const {name, value} = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }

  function onSubmission(e){
    e.preventDefault();
    console.log(input)
  }

  return (
    <form className="white-part" onSubmit={onSubmission}>
      <div className="signup">
        <h1>Sign Up</h1>
        <p>have an account already? Sign in</p>
      </div>

      <div className="buttons-p">
        <p>looking for?</p>
        <div className="buttons">
          <Button label="Projects" value='Projects'  onChange={recordData}/>
          <Button label="Designs"  value='Designs' onChange={recordData}/>
        </div>
      </div>

      <div className="all-inputs">
        <InputLabel
          type="text"
          label="Email"
          name="email"
          value={input.email}
          onChange={recordData}
        />
        <InputLabel
          type="password"
          label="Password"
          name="password"
          value={input.password}
          onChange={recordData}
        />
        <InputLabel
          type="text"
          label="Select Skills"
          name="skills"
          value={input.skills}
          onChange={recordData}
        />
        <div className="both-filters">
          <Filters name="Illustration" />
          <Filters name="Designs" />
        </div>
      </div>

      <CreateAccount />
    </form>
  );
}
