/** @format */

var spiralize = function (size) {
  if (size === 0) return [];
  if (size === 1) return [[1]];
  return [
    Array(size).fill(1),
    Array(size)
      .fill(0)
      .fill(1, size - 1),
    ...spiralize(size - 2)
      .reverse()
      .map((d) => d.reverse())
      .map((d, i, a) => [...d, +(a.length === i + 1), 1]),
  ];
};
