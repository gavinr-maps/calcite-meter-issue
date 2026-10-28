# <calcite-meter> Issue

Replication case:

```bash
git clone git@github.com:gavinr-maps/calcite-meter-issue.git
cd calcite-meter-issue
git checkout 285a7bc9585794b5e2285a02ed0f77adc976150f
npm install
npm run build
npm run preview
```

Open <http://localhost:4173> (or see my hosted version [here](https://gavinr-maps.github.io/calcite-meter-issue/5.1.2/)) and notice that the meter works fine on calcite@5.1.2.

Try again on calcite@5.2.0:

```bash
git switch -
npm install
npm run build
npm run preview
```

Open <http://localhost:4173> (or see my hosted version [here](https://gavinr-maps.github.io/calcite-meter-issue/5.2.0/))

- EXPECTED: <calcite-meter> shows up the same as before

- ACTUAL: **<calcite-meter> does not appear - blank page.**
