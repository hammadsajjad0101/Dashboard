import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return [isOpen, toggle];
}

export default useToggle;
