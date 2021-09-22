export class House {
  constructor(houseData) {
    this.id = houseData.id
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.imgUrl = houseData.imgUrl
    this.year = houseData.year
    this.price = houseData.price
    this.description = houseData.description
  }
}
