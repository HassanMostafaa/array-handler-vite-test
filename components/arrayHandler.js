// All the ways to sum up an Array
export class numsArrClass {
  constructor(...arr) {
    this.sum = 0;
    this.arr = arr;
  }

  reduceSum() {
    this.sum = this.arr.reduce((acc, curr) => acc + curr);
    return this.sum;
  }

  mapSum() {
    this.arr.map((x) => (this.sum += x));
    return this.sum;
  }

  forEachSum() {
    this.arr.forEach((x) => (this.sum += x));
    return this.sum;
  }

  forLoopSum() {
    for (let num of this.arr) {
      this.sum += num;
    }
    return this.sum;
  }
}
