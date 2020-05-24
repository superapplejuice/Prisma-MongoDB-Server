import { db } from '@lib'

export const parent = {}
export const ctx = {
  db,
}
export const getResolveInfo = (infoString: string) => infoString as any
