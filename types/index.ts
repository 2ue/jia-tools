export type NullValue = null | undefined | '';
export type BlankValue = NullValue | {} | [];
export type ObjectType = Record<string, any>;
export type FilterArr<T> = (item: T, i: number) => boolean;
export type FilterObj<T> = (value: T, key: string) => boolean;
export type FilterOption = {
  // 返回个数
  returnNum?: number;
};

export type FieldNames = {
  value: string;
  children: string;
};

export type Item = {
  value?: any;
  children?: Item[];
  [key: string]: any;
};

export type DoFunData = Record<string, any> | string | string[];

export type DoFunWithoutReturnOptions = {
  templateStr: string;
  data: DoFunData;
  value?: any[];
};

export type DoFunOptions = DoFunWithoutReturnOptions & {
  // 是否自动return
  autoReturn?: boolean;
};
