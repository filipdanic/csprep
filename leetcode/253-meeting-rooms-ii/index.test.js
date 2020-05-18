import minMeetingRooms from './index';

describe('minMeetingRooms', () => {
  it('Problem example', () => {
    // expect(minMeetingRooms([[0, 30],[5, 10],[15, 20]])).toEqual(2);
    // expect(minMeetingRooms([[7,10],[2,4]])).toEqual(1);
  });
  it('Single meeting room', () => {
    expect(minMeetingRooms([[0, 5], [5, 10], [10, 15], [15, 20], [20, 25]])).toEqual(1);
    // shuffled
    expect(minMeetingRooms([[20, 25], [5, 10], [0, 5], [10, 15], [15, 20]])).toEqual(1);
  });
});
