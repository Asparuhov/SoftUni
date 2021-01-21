function solve(obj) {
  return obj.dizzines
    ? {
        ...obj,
        levelOfHydrated:
          ((obj.weight * 0.1) * obj.experience),
        dizziness: false,
      }
    : obj;
}

console.log(
  solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })
);

