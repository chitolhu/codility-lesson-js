// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {

  if (A.length === 2) return Math.abs(A[0] - A[1])
  
  let head = A[0];
  let tail = A.slice(1, A.length).reduce((e, sum) => { return e + sum; }, 0);
  
  let minDif = Math.abs(head - tail);
  
  for (let i = 1; i<A.length; i++){
      if (Math.abs(head - tail) <= minDif) minDif = Math.abs(tail - head);
      head += A[i];
      tail -= A[i];
  }
  
  return minDif;
}