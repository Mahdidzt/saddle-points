//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (array) => {
  const saddlePointList = [];

  const isLessOrEqualToColumn = (arr, column, value) => {
    const columnValues = arr.map(row => row[column]);
    return columnValues.every(col => value <= col );
  }

  const isGreaterOrEqualToRow = (arr, row, value) => {
    const rowValues = arr[row];
    return rowValues.every(r => value >= r);
  }

  const isSaddlePoint = (arr, row, column) => {
    const value = arr[row][column];
    const isGreaterOrEqualInRow = isGreaterOrEqualToRow(arr, row, value);
    const isLessOrEqualInColumn = isLessOrEqualToColumn(arr, column, value);

    return isGreaterOrEqualInRow && isLessOrEqualInColumn && value === array[row][column];
  }


  for (let row = 1; row <= array.length; row++) {
    for (let column = 1; column <= array[row - 1].length; column++) {
      if (isSaddlePoint(array, row - 1, column - 1)) {
        saddlePointList.push({ row, column });
      }
    }
  }

  return saddlePointList;

};
