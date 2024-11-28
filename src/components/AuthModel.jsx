import { useState } from "react";

const AuthModel = ({ setShowModel, isSignup }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModel(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignup && password !== confirmPassword) {
        setError("password need to match!");
      }
      console.log("make a post request to our data");
   
   
   
   
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="auth-model">
      <div className="close-icon" onClick={handleClick}>
        *
      </div>
      <h2>{isSignup ? "CREATE ACCOUNT" : "LOG In"}</h2>
      <p>
        {" "}
        By clicking lof in, you agree to our terms.learn how we process your
        data in our privacy policy and cookie policy.{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        { isSignup && <input
          type="password"
          id="password-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};
export default AuthModel;
