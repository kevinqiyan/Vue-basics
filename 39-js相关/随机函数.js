function num(min,max){
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random()*min + 1,10);
      break;
    case 2:
      return parseInt(Math.random()*(max - min + 1) + min,10)
      break;
    default:
      return 0
      break;
  }
}