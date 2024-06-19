'use client'
import { items } from '../../public/items.json'
import Carousel from "react-elastic-carousel";
// import styles from "../styles/Elastic.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];
export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div>
      <div>
        <h1>React Elastic Carousel Example</h1>
      </div>
      <hr />
      <div >
    
      </div>
    </div>
  );
}