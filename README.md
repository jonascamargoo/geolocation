### nota de bizarrice
Quando eu adiciono o campo index: '2dshpere' no coverageArea.coordinates, da erro e a coleção simplesmente não aceita outro parceiro. Para resolver, preciso selecionar outro nome para a coleção em export default mongoose.model('Partner', PartnerSchema) para export default mongoose.model('Brewery', PartnerSchema) por exemplo, e deletar a coleção partners no mongo. A coleção é recriada e o códigol volta a funcionar (?)

### Documentar quando deixar público