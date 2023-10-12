console.log("Using traditional for loop (not recommended for objects):");
const keys = Object.keys(sampleJSON);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, sampleJSON[key]);
}
