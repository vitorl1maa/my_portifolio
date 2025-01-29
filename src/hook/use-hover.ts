import { useState } from "react";

export function useHover() {
  const [hover, setHover] = useState(false);

  return { hover, setHover }
}