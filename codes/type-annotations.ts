export default function () {
  let apples: number = 5;
  let myName: string = 'emman';

  let nothingMuch: null = null;
  let nothing: undefined = undefined;

  // build in objects
  const now: Date = new Date();

  // Array
  const colors: string[] = ['red', 'blue', 'green'];
  const peopleAges: number[] = [22, 60, 15, 5];
  const status: boolean[] = [true, false, false];

  // class instance
  class Car {}
  let car: Car = new Car();

  // Object literals
  const point: { x: number; y: number } = {
    x: 10,
    y: 29,
  };

  // Function
  const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
  };

  const logAndReturnNumber: (i: number) => number = (i) => {
    console.log(i);
    return i + 10;
  };
}
