import { AppState } from '../AppState'
import { House } from '../models/House'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    AppState.houses = []
    const res = await api.get('api/houses')
    logger.log('this is the house res', res.data)
    AppState.houses = res.data.map(h => new House(h))
  }

  async getHouseById(houseId) {
    AppState.house = null
    const res = await api.get(`api/cars/${houseId}`)
    AppState.house = new House(res.data)
    logger.log('appsate', AppState.house)
  }
}

export const housesService = new HousesService()
