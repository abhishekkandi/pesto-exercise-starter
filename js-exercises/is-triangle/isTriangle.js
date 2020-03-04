function isTriangle(side1,side2,side3) {
    if(side1 >= (side2 + side3) || side2 >= (side1 + side3) || side3 >= (side1 + side2))
      return false;
    else 
      return true
}

export {
  isTriangle,
};
