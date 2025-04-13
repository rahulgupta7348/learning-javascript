'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //Fix
    value: Number(prompt('Degree celsius:')),
  };
  //Find
  console.table(measurement);
  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//Identify
console.log(measureKelvin());
