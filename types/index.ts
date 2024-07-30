export type ObjectType = Record<string, any>
export type FilterArr<T> = (item: T, i: number) => boolean
export type FilterObj<T> = (value: T, key: string) => boolean
export type FilterOption = {
    // 返回个数
    returnNum?: number
}