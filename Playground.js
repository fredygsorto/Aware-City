import { sortByDistance } from "sort-by-distance";

const points = [
  { x: 3, y: 5 },
  { x: 80, y: 34 },
  { x: 3, y: 7 },
  { x: 22, y: 88 },
  { x: 100, y: 60 },
];

const origin = { x: 50, y: 50 };

console.log(sortByDistance(origin, points));
