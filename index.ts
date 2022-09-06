import todoInterface from './codes/todo-interface';

todoInterface();

interface Vehicle {
  name: string;
  year: number;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: false,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
