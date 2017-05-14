
import { loadStorage, saveStorage, removeStorage } from '@/helpers/storage/'

const STORAGE_VEHICLE       = 'storage_vehicle'
const INSERT_VEHICLE_LIST   = 'VEHICLE/INSERT_VEHICLE_LIST'
const INSERT_VEHICLE        = 'VEHICLE/INSERT_VEHICLE'
const DELETE_VEHICLE        = 'VEHICLE/DELETE_VEHICLE'
const GET_VEHICLE           = 'VEHICLE/DELETE_VEHICLE'
const CLEAR_VEHICLE_LIST    = 'VEHICLE/CLEAR_VEHICLE_LIST'

// initial state
const state = {
  vehicleList: loadStorage(STORAGE_VEHICLE) || [],
}

// mutations
const mutations = {
    INSERT_VEHICLE_LIST (state, payload) {
        state = {...state, vehicleList: payload}
        saveStorage(STORAGE_VEHICLE, state.vehicleList)
    },
    CLEAR_VEHICLE_LIST (state, payload) {
        state.vehicleList = []
        removeStorage(STORAGE_VEHICLE)
    }
}

// actions
const actions = {
  insertVehicleList({ commit }, data) {
    commit(INSERT_VEHICLE_LIST, data)
  },
  clearVehicleList({ commit }, data) {
    commit(CLEAR_VEHICLE_LIST, data)
  }
}

// getters
const getters = {
  vehicleList: state => state.vehicleList,
}

export default {
  state,
  mutations,
  actions,
  getters
}
