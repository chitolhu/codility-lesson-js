// Arrays / Cyclic Rotation
// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
  const arrLen = A.length;
  const mod = K % arrLen;
  if(arrLen === K || arrLen === 1 || mod === 0) return A;
  return [...A.slice(arrLen - mod), ...A.slice(0, arrLen - mod)]; 
}


