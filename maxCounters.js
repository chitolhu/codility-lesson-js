// Counting Elements / Max Counters
// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A) {
    let counters = new Array(N).fill(0)
    let max = 0
    let currentMax = 0
  
    for (let i in A) {
      if (A[i] >= 1 && A[i] <= N) {
        counters[A[i]-1] += 1
        max = Math.max(max, counters[A[i]-1]) 
      } else if (A[i] == N+1 && max > currentMax) {
        counters.fill(max)
        currentMax = max
      }
    }
  
    return counters
  }