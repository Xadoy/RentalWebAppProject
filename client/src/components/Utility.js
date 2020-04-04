import { useState } from "react";

// reference: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
