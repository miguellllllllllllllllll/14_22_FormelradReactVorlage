import { useState } from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
  const [values, setValues] = useState({
    u: 10,
    i: 2,
    r: "",
    p: ""
  });

  const handleClear = (event) => {
    event.preventDefault();
    console.log("handleClear");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // ...
  };

  return (
    <>
      <section>
        <header>
          <h2>Formelrad</h2>
          <img src={formelrad} width="200" alt="Formelrad" />
        </header>
        <form onSubmit={handleSubmit}>
          {/* Inputs */}
          <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => setValues(values => ({ ...values, u: e.target.value }))} />
          <InputField color={"black"} value={values.i} label="Stromstärke" handleChange={e => setValues(values => ({ ...values, i: e.target.value }))} />
          <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => setValues(values => ({ ...values, r: e.target.value }))} />
          <InputField color={"black"} value={values.p} label="Leistung" handleChange={e => setValues(values => ({ ...values, p: e.target.value }))} />
          <button type="submit">Calculate</button>
          <button style={{ margin: 10 }} onClick={handleClear}>Clear</button>
        </form>
      </section>
    </>
  );
}
