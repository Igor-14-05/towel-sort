function towelSort(matr) {
    var res = [];
    for (var i = 0; i < matr.length; i++)
    {
        var s = matr[i];
        if (i%2==0)
        {
            for (var j = 0; j < s.length; j++)
            {
                    res.push(s[j]);
            }
        }
        else 
        {
            for (var j = s.length-1; j >= 0; j--)
            {
                    res.push(s[j]);
            }
        }
    }
    return res;
}
console.log(towelSort([ 
    [ 1 , 2 , 3 ], 
    [ 4 , 5 , 6 ], 
    [ 7 , 8 , 9 ], 
   ]));
