type KeyType = string | number;

type GroupedData<T> = Record<KeyType, T[]>;

// key = 'day'
//  arr = [
//    { day: 'Mon', time: '13:00' }
//    { day: 'Mon', time: '14:00' }
//    { day: 'Tue', time: '09:00' }
//    { day: 'Tue', time: '11:00' }
//  ]

export function groupBy<T>(arr: T[], key: keyof T): GroupedData<T> {
  const grouped: GroupedData<T> = {};

  arr.forEach((obj) => {
    const value = obj[key];

    if (!grouped[value]) {
      grouped[value] = [];
    }

    if (obj[key] === value) {
      grouped[value].push(obj)
    }
  });

  return grouped;
}
