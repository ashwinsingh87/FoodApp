import { createContext } from "react";

const Context = createContext({
  user: { name: "Dummy", gmail: "user@gmail.com" },
});

export default Context;
