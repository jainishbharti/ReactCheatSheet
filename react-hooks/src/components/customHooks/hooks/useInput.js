import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    onChange: (e) => {
      setValue(e.target.value);
    },
    value,
  };
  return [value, bind, reset];
}

export default useInput;
