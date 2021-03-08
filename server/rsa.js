function gcd(m,n){
    while(n!=0){
        let r = m % n ;
        m = n;
        n = r;
    }
    return m;
}

module.exports = function rsa(){
    let p = 97,q = 101,n = p * q,phi = (p-1) * (q-1) , e,d;
    for(let i = 2 ; i < phi ; ++i ){
        if(gcd(i,phi) == 1){
            e = i;
            break;
        }
    }
    
    for(let i = 2 ; i < phi ; ++i ){
        if((e*i-1) % phi == 0){
            d = i;
            break;
        }
    }
    list = [n,e,d];
    return list;
}

