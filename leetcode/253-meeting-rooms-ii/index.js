const EventEnum = {
  'START': 0,
  'END': 1,
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = (intervals) => {
  let events = [];
  for (let interval of intervals) {
    events.push({ value: interval[0], type: EventEnum.START });
    events.push({ value: interval[1], type: EventEnum.END });
  }
  events.sort((a, b) => a.value === b.value ? b.type - a.type : a.value - b.value);

  let maxRoomsNeeded = 0;
  let roomsInUse = 0;
  for (let event of events) {
    if (event.type === EventEnum.START) {
      roomsInUse += 1;
      maxRoomsNeeded = Math.max(maxRoomsNeeded, roomsInUse);
    } else {
      roomsInUse -= 1;
    }
  }

  return maxRoomsNeeded;
};

export default minMeetingRooms;
