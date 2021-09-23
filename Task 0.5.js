function triangleArea(side1, side2, side3){
    
    var s = (1/2) * (side1 + side2 + side3);
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s -side3));

    return area;

}

console.log(triangleArea(3, 4, 5));