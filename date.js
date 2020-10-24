
exports.getDate = ()=>{ //anonymous function
    const options = {  month: 'long', weekday: 'long', day: 'numeric' };
    const today  = new Date();
    return today.toLocaleDateString("en-US",options);
}

exports.getDay = ()=>{ //anonymous function
    var options = {weekday: 'long'};
    const today  = new Date();
    return today.toLocaleDateString("en-US",options);
}
