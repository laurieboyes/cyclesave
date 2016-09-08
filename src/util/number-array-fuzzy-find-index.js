// todo bring in tests from old proj
export default (arr, n) => arr.reduce((prevI, curr, i) => Math.abs(curr - n) < Math.abs(arr[prevI] - n) ? i : prevI, 0);
