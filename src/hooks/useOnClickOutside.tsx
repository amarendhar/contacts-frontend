import React, { RefObject } from "react";

type useOnClickOutsideProps = {
  ref: RefObject<HTMLElement>;
  handler: () => void;
};

const useOnClickOutside = ({ ref, handler }: useOnClickOutsideProps) => {
  React.useEffect(() => {
    // @ts-ignore
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      return handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
