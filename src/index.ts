import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const customMap = new CustomMap('map')

const user = new User()
console.log(user)

const company = new Company()
console.log(company)


customMap.addMarker(user)
customMap.addMarker(company)