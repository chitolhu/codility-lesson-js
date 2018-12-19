// Arrays / Odd Occurrences In Array
// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) { 
  return A.reduce((number, sum)=>{ return number ^ sum }, 0);
}