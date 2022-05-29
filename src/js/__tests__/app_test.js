import sorter, { heroArray } from '../app';

test('Сортировка героев', () => {
  expect(sorter(heroArray)).toEqual([
    {
      name: 'маг', health: 100,
    },
    {
      name: 'лучник', health: 80,
    },
    {
      name: 'мечник', health: 10,
    }]);
});
