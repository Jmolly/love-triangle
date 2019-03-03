/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let loveTriangles = 0;

  for (let i = 0; i < preferences.length; i++) {
    let firstInTriangle = preferences[i];
    let secondInTriangle = preferences[firstInTriangle - 1];
    let thirdInTriangle = preferences[secondInTriangle - 1];

    if (i === thirdInTriangle - 1 && secondInTriangle - 1 !== i)
      loveTriangles++;
  }
  return loveTriangles / 3;
};
