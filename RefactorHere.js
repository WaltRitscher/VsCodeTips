import * as Math2 from './MathLib';
const PI = 3.141592;


function CalculatePaintNeeded(paintPerUnit, radius) {
  var PI = PI;
  // extract method
  // extract variable
  // rename symbol


  var area;
  area = PI * radius * radius;

  return area / paintPerUnit;
}
function DoWork() {

  var result = FormatErrorOutput("Live example", "An error occured: ", "See error log at ...")
  var firstResult = Math2.min(10, 20);
  var secondResult = Math2.min(-4,-5);

}

function FormatErrorOutput(valueToFormat, errorHeader, errorTagLine) {



  return errorHeader + valueToFormat + errorTagLine;
}

