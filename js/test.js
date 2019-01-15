describe('тестирование получения тарифа', function () {
    it('проверка того что есть начальная минимальная дистанция', function () {
        let rate = getRate('city');
        assert.equal(2, rate.firstDist);
    });
    it('проверка на то что указывается минимальная сумма у тарифа', function () {
        let rate = getRate('city');
        assert.equal(rate.minAmount, 400);
    })
});


describe('расчета стоимости заказа = 400тг', function () {
    it('стоимость заказа без ожидания расстояние меньше 2 км', function () {
        let rate = getRate('city');
        let rateScale = getRateScale();
        assert.equal(culcAmount(rate, rateScale), 400);
    });

    it('стоимость заказа без ожидания расстояние 3 км = 450тг', function () {
        let rate = getRate('city');
        let rateScale = getRateScale();
        rateScale.dist = 3;
        assert.equal(culcAmount(rate, rateScale), 450);
    });

    it('ожидание 10 мин., 11 км., багаж = 1010тг', function () {
        let rate = getRate('city');
        let rateScale = getRateScale();
        rateScale.dist = 11;
        rateScale.expect = 10;
        rateScale.luggage = true;
        assert.equal(culcAmount(rate, rateScale), 1010);
    });
});