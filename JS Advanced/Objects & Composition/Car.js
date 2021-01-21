function solve(obj) {
  const { model, power, color, carriage, wheelsize } = obj;
  let volume;
  let powerS;
  let wheel = wheelsize;
  if (power <= 90) {volume = 1800; powerS = 90}
  else if (power > 90 && power <= 120) {volume = 2400; powerS = 120}
  else if (power > 120) { volume = 3500; powerS= 200}
  while (wheel % 2 === 0){ wheel--}
  return {model: model, engine: { power: powerS, volume: volume }, carriage: { type: carriage, color: color }, wheels: [wheel, wheel, wheel, wheel],};
}

console.log(
  solve({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
})
);
