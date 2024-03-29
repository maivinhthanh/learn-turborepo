"use client";

import { Slider } from "../../../components/Slider";
import { MATERIAL_CHARACTER } from "../constant";
import Menu from "./Menu";

export default function Container(): JSX.Element {
  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
  ]
  const handleClick = (item: string) =>{
    console.log(item);
  }
  return (
    <>
      <Menu active={MATERIAL_CHARACTER.SKIN} onClick={handleClick}></Menu>
      <Slider heading="Example Slider" slides={slideData} />
    </>
  );
}