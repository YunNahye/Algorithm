function solution(numbers) {
  var answer = 0;

  const isPrime = n => {
      if(n < 2) return false;
      for(let i = 2; i * i <= n; i++) {
          if(n % i === 0) return false;
      }
      return true;
  };

  const map = new Map();

  const makeNum = (number, lst) => {
      if(!map.has(number)) {
          map.set(number, true);
          isPrime(number) && answer++;
      }

      lst.forEach((n, i) => {
          const newLst = [...lst];
          newLst.splice(i, 1);
          makeNum(parseInt(number + n), newLst);
      });
  };

  makeNum(0, [...numbers]);

  return answer;
}