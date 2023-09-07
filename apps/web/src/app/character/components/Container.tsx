"use client";

import { MATERIAL_CHARACTER } from "../constant";
import Menu from "./Menu";

export default function Container(): JSX.Element {
  const handleClick = (item: string) =>{
    console.log(item);
  }
  return (
    <>
      <Menu active={MATERIAL_CHARACTER.SKIN} onClick={handleClick}></Menu>
      <div className="flex-initial"></div>
    </>
  );
}