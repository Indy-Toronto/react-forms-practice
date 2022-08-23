import InputLabel from "./InputLabel";
import Button from "./Button";
import CreateAccount from "./CreateAccount";
import Filters from "./Filter";

export default function WhitePart() {
  return (
    <div className="white-part">
      <div className="signup">
        <h1>Sign Up</h1>
        <p>have an account already? Sign in</p>
      </div>

      <div className="buttons-p">
        <p>looking for?</p>
        <div className="buttons">
          <Button label="Projects" />
          <Button label="Designs" />
        </div>
      </div>

      <div className="all-inputs">
        <InputLabel
          type="text"
          label="Email"
          name="email"
          value=""
          onChange=""
        />
        <InputLabel
          type="password"
          label="Password"
          name="password"
          value=""
          onChange=""
        />
        <InputLabel
          type="text"
          label="Select Skills"
          name="skills"
          value=""
          onChange=""
        />
      </div>
      <div className="both-filters">
        <Filters name="Illustration" />
        <Filters name="Designs" />
      </div>
      <CreateAccount />
    </div>
  );
}
