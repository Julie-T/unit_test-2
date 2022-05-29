// TODO: write your code here

// import { indexOf } from "core-js/core/array";

export const heroArray = [
  {
    name: 'мечник', health: 10,
  },
  {
    name: 'маг', health: 100,
  },
  {
    name: 'лучник', health: 80,
  }];

export default function sorter(arr) {
  arr.sort((a, b) => b.health - a.health);
  // for(let i = 0; i < hero.length; i++) {
  //     if(hero[i-1].health > hero[i].health) {
  //     }
  // }
  // arr.forEach((item, i) => {
  //   if(item[i][2] > item[i - 1][2]) {
  //     i = 0;
  //   }
  // });
  return arr;
}

sorter(heroArray);
