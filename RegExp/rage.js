function solve5(input){
    let pattern = /(?<scream>[^\d]+)(?<count>\d+)/g;
    let matches;
    let result = '';
    let uniq = '';
    while ((matches = pattern.exec(input[0])) != null){
        result += matches.groups.scream.repeat(Number(matches.groups.count)).toUpperCase();
        uniq += matches.groups.scream;}
    let count = [...uniq].filter((s => c => !s.has(c.toLowerCase()) && s.add(c.toLowerCase()))(new Set)).join('');
    console.log(`Unique symbols used: ${count.length} \n${result}`);
}
solve5([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
  ]);
