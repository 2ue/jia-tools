export type NullValue = null | undefined | ''
export type BlankValue = NullValue | {} | []
export type ObjectType = Record<string, any>
export type FilterArr<T> = (item: T, i: number) => boolean
export type FilterObj<T> = (value: T, key: string) => boolean
export type FilterOption = {
    // 返回个数
    returnNum?: number
}

export type FieldNames = {
    value: string
    children: string
}

export type Item = {
    value?: any;
    children?: Item[];
    [key: string]: any;
}