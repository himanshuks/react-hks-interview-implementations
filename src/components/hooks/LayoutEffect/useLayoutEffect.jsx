// USELAYOUTEFFECT - can be used where we want to do some actions before actual rendering happens after the state change
// USEEFFECT - gets called after render gets completed on screen

import { useLayoutEffect } from "react";
import { useEffect, useRef } from "react";

export const LayoutEffectExample = () => {
  const inputRef = useRef(null);

  // Here as we have used both the effects, first LayoutEffect will be called, then Effect hook

  useEffect(() => {
    console.log("useEffect called");
    inputRef.current.value = "Singh";
  });

  // Even after setting value to SINGH in useEffect, we see HIMANSHU value in console
  // LayoutEffect gets called just after state update & before render gets completed on screen

  useLayoutEffect(() => {
    console.log("useLayoutEffect is called");
    console.log(inputRef.current.value);
  });

  return (
    <div>
      <input
        type="text"
        value="Himanshu"
        ref={inputRef}
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};
