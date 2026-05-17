const scope = process.argv[2];
if (!scope || scope.length !== 3) {
  console.log("Usage: node check-jsr-scope.js <3-letter-scope>");
  process.exit(1);
}

const url = `https://jsr.io/@${scope}`;
const res = await fetch(url, {
  headers: { Accept: "application/json" },
  redirect: "manual",
});

if (res.status === 200) {
  console.log(`@${scope} is TAKEN`);
} else if (res.status === 404) {
  console.log(`@${scope} is AVAILABLE!`);
} else {
  console.log(`@${scope} returned status ${res.status}`);
}
