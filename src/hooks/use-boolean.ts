import { useState, useCallback } from "react";

export type BooleanHookReturnValue = {
  value: boolean;
  setTrue(): void;
  setFalse(): void;
  toggle(): void;
};

const useBoolean = (initialValue: boolean = false): BooleanHookReturnValue => {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
};

export default useBoolean;
