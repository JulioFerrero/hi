const results = { taken: [], available: [] };

const combos = [];
for (let i = 97; i <= 122; i++) {
  for (let j = 97; j <= 122; j++) {
    combos.push(String.fromCharCode(i) + String.fromCharCode(j));
  }
}

console.log(`Checking ${combos.length} scopes...\n`);

const BATCH = 10;
const DELAY = 200;

for (let i = 0; i < combos.length; i += BATCH) {
  const batch = combos.slice(i, i + BATCH);
  const checks = batch.map(async (scope) => {
    try {
      const res = await fetch(`https://jsr.io/@${scope}`, {
        headers: { Accept: "application/json" },
        redirect: "manual",
      });
      return { scope, status: res.status };
    } catch {
      return { scope, status: 0 };
    }
  });

  const outcomes = await Promise.all(checks);
  for (const { scope, status } of outcomes) {
    if (status === 200) {
      results.taken.push(scope);
    } else if (status === 404) {
      results.available.push(scope);
    } else {
      console.log(`  @${scope} -> status ${status}`);
    }
  }

  const progress = Math.min(i + BATCH, combos.length);
  process.stdout.write(`\r  ${progress}/${combos.length} checked...`);
  await new Promise((r) => setTimeout(r, DELAY));
}

console.log(`\n\n=== TAKEN (${results.taken.length}) ===`);
console.log(results.taken.map((s) => `@${s}`).join(", ") || "(none)");

console.log(`\n=== AVAILABLE (${results.available.length}) ===`);
console.log(results.available.map((s) => `@${s}`).join(", ") || "(none)");
