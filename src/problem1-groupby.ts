type KeyType = string | number;

type GroupedData<T> = Record<KeyType, T[]>;

export function groupBy<T>(arr: T[], key: keyof T): GroupedData<T> {
  const grouped: GroupedData<T> = {};

  return grouped;
}
