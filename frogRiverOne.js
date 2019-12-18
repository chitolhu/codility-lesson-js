// Counting Elements / Frog River One
// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
	let tap = []
	let sum = (X * (X + 1)) / 2
	let time = 0
		while (sum > 0) {    
			if (!tap[A[time]]) {
				sum-=A[time]
				tap[A[time]] = true
			}
			time ++
		}
  
  return  sum > 0 ? time - 1 : -1
}