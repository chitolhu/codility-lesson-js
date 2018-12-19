// Time Complexity / Frog Jump
// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function solution(X, Y, D) { 
  if(X == Y) return 0; 
  if(0 == (Y - X) % D) { 
    return (Y - X) / D;
  }else { 
    return Math.floor(1+(Y-X) / D); 
  }
}