import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfrimPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && confirmPass) {
      if (password === confirmPass) {
        alert("Sign Up Successfully");
      } else {
        alert("ERR: password & confirm password must be same");
      }
    } else {
      alert("All Fileds are Mandatory");
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfrimPass("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="heading">Sign up</p>
        <div>
          <p className="fieldName">Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className={name ? "data" : "noData"}>
            {" "}
            {/* //* If `name` has a value, use the 'data' class. If not, use the 'noData' class. */}
            {name ? "" : "Name is required"}{" "}
            {/* //* If `name` has a value, show nothing. If not, show "Name is required". */}
          </p>
        </div>

        <div>
          <p className="fieldName">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={email ? "data" : "noData"}>
            {email ? "" : "email is required"}
          </p>
        </div>

        <div>
          <p className="fieldName">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={password ? "data" : "noData"}>
            {password ? "" : "password is required"}
          </p>
        </div>

        <div>
          <p className="fieldName">Confrim Password</p>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfrimPass(e.target.value)}
          />
          <p className={name ? "data" : "noData"}>
            {confirmPass ? "" : "confirm password is required"}
          </p>
        </div>

        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </>
  );
}
