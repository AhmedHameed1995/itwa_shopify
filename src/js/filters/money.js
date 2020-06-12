Vue.filter('money', function (value, sign = 'Rs') {
    if (!value) return 0;
    return sign + (value/100).toFixed( 2 );
}) 