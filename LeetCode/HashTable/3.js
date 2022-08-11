var lengthOfLongestSubstring = function(s) {
  let hashMap = {};
  
  let result = 0;
  let start = 0;
  
  [...s].forEach((c, idx) => {
    if(c in hashMap && start <= hashMap[c]) start = hashMap[c] + 1; //중복 문자 안쪽으로 시작 위치 변경
    else result = Math.max(result, idx - start + 1); //부분 문자열 길이 비교
    
    hashMap[c] = idx; //문자와 인덱스 해시테이블에 저장
  });
  
  return result;
};

//처음엔 시작 위치 갱신을 생각하지 못하고 해시테이블에 존재하는 문자가 나오면 그 문자부터 다시 새 부분 문자열의 길이를 셌다
//(반례) vbvc => 이경우 vb까지 2를 세고 v가 재등장 하자마자 새로운 v부터 다시 세기 시작해서 vc로 2를 세게 됨, 정답: 3, 결과: 2