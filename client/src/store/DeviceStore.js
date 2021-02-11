import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Freezer'},
      {id: 2, name: 'Smartphone'}
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Sony'},
      {id: 3, name: 'Apple'},
    ]
    this._devices = [
      {id: 1, name: "12 pro", price: 100000, rating: 1, img: "d3e8e3a0-b090-4642-8421-95d8dd123bcf.jpg"},
      {id: 2, name: "12 pro", price: 100000, rating: 2, img: "d3e8e3a0-b090-4642-8421-95d8dd123bcf.jpg"},
      {id: 3, name: "12 pro", price: 100000, rating: 3, img: "d3e8e3a0-b090-4642-8421-95d8dd123bcf.jpg"},
      {id: 4, name: "12 pro", price: 100000, rating: 4, img: "d3e8e3a0-b090-4642-8421-95d8dd123bcf.jpg"}
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

}