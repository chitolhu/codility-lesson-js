// Time Complexity / Find the missing element in a given permutation.
// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
  const N = A.length + 1;
  if(N == 0 || N == null) return 0; 
  return Math.abs((N * (N+1) / 2) - A.reduce((el, sum) => { 
      return el + sum; }, 0))
}