import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

import Form from "./components/Form";
import Paragraph from "./components/Paragraph";

const App = () => {
  const [text, setText] = useState([]);

  const handleFormSubmit = (e, count) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <main>
      <section className="section-center">
        <h4>tired of boring lorem ipsum?</h4>
        <Form handleSubmit={handleFormSubmit} />
        {text.map((paragraph) => {
          const id = nanoid();
          return <Paragraph key={id} paragraph={paragraph} />;
        })}
        <Paragraph />
      </section>
    </main>
  );
};

export default App;
