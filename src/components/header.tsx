"use client";

import { useState } from "react";

type propsType = {
  profile: string;
};

export default function Header(props: propsType) {
  // console.log(props.profile)
  const [state, setState] = useState(0);
  return (
    <main>
      Header
      <br />
      <button onClick={() => alert("Click")}>
        {props.profile} {state}
      </button>
      <br />
      <button onClick={() => setState(1)}>
        {props.profile} {state}
      </button>
    </main>
  );
}
