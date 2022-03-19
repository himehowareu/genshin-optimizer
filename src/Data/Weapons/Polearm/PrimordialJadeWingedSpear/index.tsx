import type { WeaponData } from 'pipeline'
import { input } from '../../../../Formula'
import { equal, lookup, naught, prod, subscript } from "../../../../Formula/utils"
import { WeaponKey } from '../../../../Types/consts'
import { objectKeyMap, range } from '../../../../Util/Util'
import { cond, st, trans } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import WeaponSheet, { conditionalHeader, IWeaponSheet } from '../../WeaponSheet'
import iconAwaken from './AwakenIcon.png'
import data_gen_json from './data_gen.json'
import icon from './Icon.png'

const key: WeaponKey = "PrimordialJadeWingedSpear"
const data_gen = data_gen_json as WeaponData

const [tr, trm] = trans("weapon", key)

const [condStackPath, condStack] = cond(key, "stack")
const atkInc = [0.032, 0.039, 0.046, 0.053, 0.06]
const allDmgInc = [0.12, 0.15, 0.18, 0.21, 0.24]
const atk_ = lookup(condStack, objectKeyMap(range(1, 7), i => prod(subscript(input.weapon.refineIndex, atkInc, { key: "_" }), i)), naught)
const all_dmg_ = equal(condStack, "7", subscript(input.weapon.refineIndex, allDmgInc, { key: "_" }))
export const data = dataObjForWeaponSheet(key, data_gen, {
  premod: {
    atk_,
    all_dmg_
  },
})
const sheet: IWeaponSheet = {
  icon,
  iconAwaken,
  document: [{
    conditional: {
      value: condStack,
      path: condStackPath,
      header: conditionalHeader(tr, icon, iconAwaken, st("stacks")),
      name: trm("condName"),
      states: Object.fromEntries(range(1, 7).map(i => [i, {
        name: st("stack", { count: i }),
        fields: [{ node: atk_ }, { node: all_dmg_ }]
      }]))
    }
  }],
}
export default new WeaponSheet(key, sheet, data_gen, data)
