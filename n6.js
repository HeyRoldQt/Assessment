class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}

const radius = 3.5;
const height = 7.2;

const cylinder = new Cylinder(radius, height);
const volume = cylinder.getVolume();

console.log(`The volume of the cylinder is: ${volume}`);
