import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
};

const handleSubmit = (e) => {};

const Register = () => {
  return (
    <>
      <h1 class="jumbotron text-center bg-primary square">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </form>
      </div>
    </>
  );
};

export default Register;
