const getRate = rateName => {
    if (rateName ==='city') {
        return {
            'rateName': 'city',
            'firstDist': 2,
            'minAmount': 400,
            'costPerKm': 50,
            'freeExp': 7,
            'costExpect': 17,
       };
    }
};

const getRateScale = () => {
  return {
      'dist': 2,
      'expect': 5,
  }
};

const culcAmount = (rate, scale) => {

    //минимальная стоимость заказа
    var minAmount = rate.minAmount;

    //расчет стоимости за километраж
    var amountDist = (scale.dist - rate.firstDist) * 50;
    amountDist = amountDist > 0 ? amountDist : 0;

    //расчет стоимости за ожидание
    var amountExp = (scale.expect - rate.freeExp) * 17;
    amountExp = amountExp > 0 ? amountExp : 0;
    console.log(scale);
    console.log(rate);
    console.log(amountExp);
    //расчет стоимости багажа
    var lagAmoutn = scale.luggage ? 100 : 0;
    console.log(minAmount); console.log(amountDist);

    var res = minAmount + amountDist + amountExp + lagAmoutn;


    //округляем до 10
    res = res % 10 > 0 ? (res - res % 10) + 10 : res;

    return res;
};