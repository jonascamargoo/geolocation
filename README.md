# ze-gis-api
converter de then para async await;
passar o agile test do notion para o obsidian;
configurar o prettier;

#### Semantic Commit Messages
feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)

#### mapquest api
https://developer.mapquest.com/user/me/apps

#### Possíveis erros

possível erro no metodo createPartner, pois usei save nele e usei save no model tb

### ensina tudo que preciso pra esse software
https://blog.devgenius.io/an-immersive-guide-to-geospatial-mongodb-data-9ee3529aab9d

### nota de bizarrice
Quando eu adiciono o campo index: '2dshpere' no coverageArea.coordinates, da erro e a coleção simplesmente não aceita outro parceiro. Para resolver, preciso selecionar outro nome para a coleção em export default mongoose.model('Partner', PartnerSchema) para export default mongoose.model('Brewery', PartnerSchema) por exemplo, e deletar a coleção partners no mongo. A coleção é recriada e o códigol volta a funcionar (?)



### como fazer o 3 método?
vou analisar se o ponto enviado está na mesma ceverageArea de cada documento. Para fazer isso, vou quebrar o array de polígonos em polygonos.

[[ [[Array], [Array], [Array], [Array]]],[ [ [Array], [Array], [Array], [Array], [Array] ]]]



### caso n de certo
const turf = require('@turf/turf');

// ...

const polygons = partner.splitCoverageArea();

for (const polygon of polygons) {
  const point = turf.point([x, y]);
  if (turf.booleanContains(polygon, point)) {
    console.log('O ponto está contido dentro do polígono!');
  }
}