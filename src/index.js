
// You should implement your task here.

module.exports = function towelSort (matr) {
  var res = [];
  if (matr==undefined)
  { 
    return [];
  }
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
