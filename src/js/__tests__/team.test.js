import Team from '../team';

test('should not throw error for different characters', () => {
  const first = { character: 'character_1' };
  const second = { character: 'character_2' };
  const myTeam = new Team();
  expect(() => {
    myTeam.add(first);
    myTeam.add(second);
  }).not.toThrow();
});

test('should throw error for same characters', () => {
  const first = { character: 'character_1' };
  const second = first;
  const myTeam = new Team();
  expect(() => {
    myTeam.add(first);
    myTeam.add(second);
  }).toThrow('The character has already been added');
});

test('should convert to Array', () => {
  const first = { character: 'character_1' };
  const second = { character: 'character_2' };
  const myTeam = new Team();
  myTeam.add(first);
  myTeam.add(second);
  expect(myTeam.toArray()).toEqual([first, second]);
});

test('should add all without throw', () => {
  const first = { character: 'character_1' };
  const doubleFirst = first;
  const second = { character: 'character_2' };
  const myTeam = new Team();
  expect(() => {
    myTeam.addAll([first, doubleFirst, second]);
  }).not.toThrow();
});

test('should add all without duplicate', () => {
  const first = { character: 'character_1' };
  const doubleFirst = first;
  const second = { character: 'character_2' };
  const myTeam = new Team();
  expect(myTeam.addAll([first, doubleFirst, second]).toArray()).toEqual([first, second]);
});
