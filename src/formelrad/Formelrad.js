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

  const [colors, setColors] = useState({
    u: "black",
    i: "black",
    r: "black",
    p: "black",
    message: "red"
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    const u = parseFloat(values.u);
    const i = parseFloat(values.i);
    const r = parseFloat(values.r);
    const p = parseFloat(values.p);

    if (isNaN(u) && isNaN(i)) {
      // calculate u and i
      setValues(values => ({
        ...values,
        u: Math.sqrt(p * r) || "",
        i: Math.sqrt(p / r) || ""
      }));
    } else if (isNaN(u) && isNaN(r)) {
      // calculate u and r
      setValues(values => ({
        ...values,
        u: p / i || "",
        r: p / (i * i) || ""
      }));
    } else if (isNaN(u) && isNaN(p)) {
      // calculate u and p
      setValues(values => ({
        ...values,
        u: i * r || "",
        p: i * i * r || ""
      }));
    } else if (isNaN(i) && isNaN(r)) {
      // calculate i and r
      setValues(values => ({
        ...values,
        i: p / u || "",
        r: (u * u) / p || ""
      }));
    } else if (isNaN(i) && isNaN(p)) {
      // calculate i and p
      setValues(values => ({
        ...values,
        i: u / r || "",
        p: (u * u) / r || ""
      }));
    } else {
      // calculate r and p
      setValues(values => ({
        ...values,
        r: u / i || "",
        p: u * i || ""
      }));
    }
  };

  return (
    <>
      <section>
        <header>
          <h2>Formelrad</h2>
          <img src={formelrad} width="200" alt="Formelrad" />
        </header>
        <form onSubmit={handleSubmit}>
          <InputField
            color={colors.u}
            value={values.u}
            label="Spannung"
            handleChange={e => setValues(values => ({ ...values, u: e.target.value }))}
          />
          <InputField
            color={colors.i}
            value={values.i}
            label="Stromstärke"
            handleChange={e => setValues(values => ({ ...values, i: e.target.value }))}
          />
          <InputField
            color={colors.r}
            value={values.r}
            label="Widerstand"
            handleChange={e => setValues(values => ({ ...values, r: e.target.value }))}
          />
          <InputField
            color={colors.p}
            value={values.p}
            label="Leistung"
            handleChange={e => setValues(values => ({ ...values, p: e.target.value }))}
          />
          <button type="submit">Calculate</button>
        </form>
      </section>
    </>
  );
}
