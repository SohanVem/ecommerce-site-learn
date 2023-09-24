export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Nike Air Force 1s',
    price: 110,
    description: 'The basketball OG shoes that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.'
  },
  {
    id: 2,
    name: 'Adidas Basketball Hoodie',
    price: 90,
    description: 'New fashion in Adidas basketball collection. Made from a blend of cotton and polyester fabric'
  },
  {
    id: 3,
    name: 'AE Cargo Jogger Pants',
    price: 60,
    description: 'Jogger pants made for anywhere with a cargo twist '
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/