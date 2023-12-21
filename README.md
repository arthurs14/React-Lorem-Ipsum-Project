# React Lorem Ipsum SPA

- Simple React Component where the user can specify how many paragraphs to show based on user input.
- Utilizes Reusable components and `useState`.

# Steps to Run

1. Install project packages: `npm install`
2. Run in dev mode: `npm run dev`

# Future TO-DOs

1. Produce paragraphs not by static data.

#### nanoid

nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.

The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

Here's an example of how to use nanoid to generate a unique ID:

```sh
npm i nanoid
```

```js
import { nanoid } from "nanoid";

const id = nanoid(); // Generates a 21-character random ID

console.log(id); // Output: "Uakgb_J5m9g-0JDMbcJqL"
```

In this example, we first import the nanoid function from the nanoid library. We then call the nanoid() function to generate a new, random ID. Finally, we output the ID to the console.

One of the benefits of using nanoid is that it generates IDs that are highly unlikely to collide, even when generating a large number of them. This is achieved by using a combination of randomness and a predefined set of characters, which ensures that each ID is unique and unpredictable.
