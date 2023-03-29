export const expensiveFunc = (number) =>{
  let rnd = 0;
  for (let i =0; i < 2e8; i++){
    rnd += Math.random()
  }

  return number + rnd
}

