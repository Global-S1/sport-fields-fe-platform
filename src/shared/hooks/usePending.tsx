import { useState } from "react";

export const usePending = () => {
  const [isPending, setIsPending] = useState(false);

  const start = () => {
    setIsPending(true);
  };

  const stop = () => {
    setIsPending(false);
  };

  return {
    isPending,
    start,
    stop,
  };
};
