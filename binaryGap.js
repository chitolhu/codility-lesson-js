// Iterations / Binary Gap 
// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  let gap = 0;
  let count = 0;
  isBin = N.toString(2);

  let i = 0;
  if(isBin.length > 2) {
    while (i <= isBin.length-1) {
      if (isBin.charAt(i) == "0") {
      count ++;
      }else {
      gap = count > gap ? count : gap;
      count = 0;
      }      
    i++;
    }   
  }
  return gap;
  } 