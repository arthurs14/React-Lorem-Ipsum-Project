import { useState } from "react";

const Form = ({ handleSubmit }) => {
  const [count, setCount] = useState(1);

  const handleInput = (e) => {
    if (e.target.value <= 8) {
      setCount(Number(e.target.value));
    }
  };

  return (
    <form className="lorem-form" onSubmit={(e) => handleSubmit(e, count)}>
      <label htmlFor="paragraphs">Paragraphs:</label>
      <input type="number" name="number" value={count} onChange={handleInput} />
      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );
};

export default Form;
