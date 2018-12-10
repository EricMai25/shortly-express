const parseCookies = (req, res, next) => {
    if(!req.headers.Cookie){
        req.cookies ={}
    }else{
        var arrCook = req.headers.Cookie.split ('; ')
        var indCook = arrCook.forEach(result => result.split('='))
        var cookObj = indCook.reduce((acc, value)=> {
            return acc[value[0]] = value[1];
        },{})
        req.cookies = cookObj
    }
    next()
};

module.exports = parseCookies;