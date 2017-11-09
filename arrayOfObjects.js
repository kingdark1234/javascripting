var restaurants = [
  {
    name: 'Audrey',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Company',
    place: 'central',
    cost: 1500
  },
  {
    name: 'Jone Salad',
    place: 'esplanade',
    cost: 500
  },
  {
    name: 'Swesens',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Hut',
    place: 'central',
    cost: 1500
  }
];
function ArrayIntegerMemberFilltered (arrayInput,condition,num,argulment){
  var lowercaseCodition = condition.toLowerCase();
  return arrayInput.filter(function (array){
    if(lowercaseCodition === 'less'){
      return array[argulment] < num;
    }else if(lowercaseCodition === 'more'){
      return array[argulment] > num;
    }else if(lowercaseCodition === 'equal') {
      return array[argulment] === num;
    }else{
      return false;
    }
  })
}

console.log(ArrayIntegerMemberFilltered(restaurants,'equal',1000,'cost'));
