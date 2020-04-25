function birthday(s, d, m) {
    var sum = 0;
    var sumindex = 0;
    for(var i = 0; i < s.length; i++){
        for(var j = i; j < i+m; j++){
            sum+=s[j]
            // console.log(s[i])
            }
            if(sum == d){
            sumindex++    
            }
        sum = 0;
    }
  return sumindex
}
