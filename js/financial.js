function getMoney(){
    var input = document.getElementById('input').value;
    var rate = document.getElementById('rate').value;
    var days = document.getElementById('days').value;

    document.getElementById('return').value = math.chain(rate)
                                                    .divide(100)
                                                    .multiply(input)
                                                    .divide(365)
                                                    .multiply(days)
                                                    .done();
}