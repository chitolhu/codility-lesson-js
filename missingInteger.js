// Counting Elemenst / Missing Integer
// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer

function solution(A) {
    let dic = {}
    for (let i of A) {
        dic[i] = true
    }

    for(let i = 1; i < 10000002; i++){
        if (!dic[i]) return i
    }
    
    return 1
}