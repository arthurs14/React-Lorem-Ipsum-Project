import { useState } from "react";

const Form = () => {
  const [count, setCount] = useState(1);

  const handleInput = (e) => {
    if (e.target.value <= 8) {
      setCount(Number(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted:", count);
  };

  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="paragraphs">Paragraphs:</label>
      <input type="number" name="number" value={count} onChange={handleInput} />
      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );
};

export default Form;
