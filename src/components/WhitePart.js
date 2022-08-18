export default function WhitePart() {
  return (
    <div className="white-part">
      <h1>Sign Up</h1>
      <p>have an account already? Sign in</p>
      <p>looking for?</p>
      <button>
        <input type="radio" name="projects" id="" />
        <label htmlFor="">Projects</label>
      </button>
      <button>
        <input type="radio" name="designs" id="" />
        <label htmlFor="">Designs</label>
      </button>
      <p>Email</p>
      <input type="text" name="email" />
      <p>Password</p>
      <input type="password" name="password" />
      <p>Select Skills</p>
      <input type="text" name="skills" placeholder="Type of search..." />
    </div>
  );
}
