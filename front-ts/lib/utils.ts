let encodeQueryData = function (data: any) {
    var ret = [];
    for (var d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
};

export {
    encodeQueryData
}