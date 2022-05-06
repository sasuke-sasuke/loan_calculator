
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:100000, years: 10, rate: 6})).toEqual('1110.21');
});


it("should return a result with 2 decimal places", function() {
  expect(parseFloat(calculateMonthlyPayment({amount:5000, years:2, rate:5}))).toBeCloseTo(219.36, 2);
  
});

/// etc
