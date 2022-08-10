import React from "react";

import Input from "./components/Input";

export default function App() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    statement: false 
  });

function handleChange(e){
    const {name, value, checked, type} = e.target
    setFormData((prevState) => {
        return {
            ...prevState,
            [name]:  type === "checkbox" ? !formData.statement:  value
        }
    })
}

function handleFormData(event){
    event.preventDefault();
    console.log(formData)
}

  return (
    <form action="" onSubmit={handleFormData}>
        <div className="box">
      <h2>Sign up with your email</h2>
      <p>
        Already have an account? <span>Sign in</span>
      </p>
      <Input heading="First name" name="firstname" value={formData.firstname} onChange={handleChange}  />
      <Input heading="Last name" name="lastname" value={formData.lastname} onChange={handleChange} />
      <Input heading="Email" name="email" value={formData.email}  onChange={handleChange} />
      <Input heading="Password" name="password" value={formData.password} onChange={handleChange} />
      <div className="div-check-box">
        <input
        checked={formData.statement}
          type="checkbox"
          name="statement"
          id="agreement"
          onChange={handleChange}
         
        />
        <label htmlFor="agreeement">
          I agree to the <span>Terms of Service </span> and{" "}
          <span>Privacy Policy</span>
        </label>
      </div>
      <button type="submit">Create account</button>
    </div>
    </form>
  );
}
