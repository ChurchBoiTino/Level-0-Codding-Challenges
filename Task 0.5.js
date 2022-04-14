function triangleArea(side1, side2, side3){
    
    const sPerimeter = (1/2) * (side1 + side2 + side3);
    const area = Math.sqrt(sPerimeter * (sPerimeter - side1) * (sPerimeter - side2) * (sPerimeter -side3));

    return area;

}

console.log(triangleArea(3, 4, 5));