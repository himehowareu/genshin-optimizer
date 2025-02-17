import { deepFreeze } from "../Util/Util"
import { ArtCharDatabase } from "./Database"
import { IGO, IGOOD, ImportResult } from "./exim"
export class DataManager<CacheKey extends string, GOKey extends string, CacheValue extends StorageValue, StorageValue> {
  database: ArtCharDatabase
  goKey: GOKey

  constructor(database: ArtCharDatabase, goKey: GOKey) {
    this.database = database
    this.goKey = goKey
  }

  data: Dict<CacheKey, CacheValue> = {}
  listeners: Dict<CacheKey, Callback<CacheKey>[]> = {}
  anyListeners: Callback<CacheKey>[] = []

  toStorageKey(key: CacheKey): string {
    return `${key}`
  }
  validate(obj: any, key: CacheKey): StorageValue | undefined {
    return obj
  }
  toCache(storageObj: StorageValue, id: CacheKey): CacheValue | undefined {
    return { ...storageObj, id } as any as CacheValue
  }
  deCache(cacheObj: CacheValue): StorageValue {
    const { id, ...storageObj } = cacheObj as any
    return storageObj
  }
  followAny(callback: Callback<CacheKey>): () => void {
    this.anyListeners.push(callback)
    return () => {
      this.anyListeners = this.anyListeners.filter(cb => cb !== callback)
    }
  }
  follow(key: CacheKey, callback: Callback<CacheKey>) {
    if (this.listeners[key]) this.listeners[key]!.push(callback)
    else this.listeners[key] = [callback]
    return () => {
      this.listeners[key] = this.listeners[key]?.filter(cb => cb !== callback)
      if (!this.listeners[key]?.length) delete this.listeners[key]
    }
  }

  get keys() { return Object.keys(this.data) }
  get values() { return Object.values(this.data) }
  get(key: CacheKey | "" | undefined): CacheValue | undefined { return key ? this.data[key] : undefined }
  getStorage(key: CacheKey): StorageValue { return this.database.storage.get(this.toStorageKey(key)) }
  set(key: CacheKey, value: Partial<StorageValue>): boolean {
    const old = this.getStorage(key)
    const validated = this.validate({ ...(old ?? {}), ...value }, key)
    if (!validated) {
      this.trigger(key, "invalid", value)
      return false
    }
    const cached = this.toCache(validated, key)
    if (!cached) {
      this.trigger(key, "invalid", value)
      return false
    }
    if (!old) this.trigger(key, "new", cached)
    this.setCached(key, cached)
    return true
  }
  setCached(key: CacheKey, cached: CacheValue) {
    deepFreeze(cached)
    this.data[key] = cached
    this.saveStorageEntry(key, cached)
    this.trigger(key, "update", cached)
  }
  /** Trigger update event */
  trigger(key: CacheKey, reason: TriggerString, object?: any) {
    this.listeners[key]?.forEach(cb => cb(key, reason, object))
    this.anyListeners.forEach(cb => cb(key, reason, object))
  }
  remove(key: CacheKey) {
    const rem = this.data[key]
    delete this.data[key]
    this.removeStorageEntry(key)

    this.trigger(key, "remove", rem)
    delete this.listeners[key]
  }
  clear() {
    for (const key in this.data) {
      this.remove(key)
    }
  }
  removeStorageEntry(key: CacheKey) {
    this.database.storage.remove(this.toStorageKey(key))
  }
  saveStorageEntry(key: CacheKey, cached: CacheValue) {
    this.database.storage.set(this.toStorageKey(key), this.deCache(cached))
  }
  clearStorage() {
    for (const key in this.data) this.removeStorageEntry(key)
  }
  saveStorage() {
    Object.entries(this.data).forEach(([k, v]) => this.saveStorageEntry(k as CacheKey, v))
  }
  exportGOOD(go: Partial<IGOOD & IGO>) {
    go[this.goKey as any] = Object.entries(this.data).map(([id, value]) => ({ ...this.deCache(value), id }))
  }
  importGOOD(go: IGOOD & IGO, result: ImportResult) {
    const entries = go[this.goKey as any]
    if (entries && Array.isArray(entries)) entries.map(ele => ele.id && this.set(ele.id, ele))
  }
}
export type TriggerString = "update" | "remove" | "new" | "invalid"
type Callback<Arg> = (key: Arg, reason: TriggerString, object: any) => void
