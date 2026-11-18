/**
 * Sample data from the prototype spec. Every screen reads from here, so the
 * times, platforms and prices stay consistent. Nothing is live.
 */
export const journey = {
  customer: 'Amira Shah',
  meetingTime: '14:30',
  now: '11:14',
  updatedAt: '11:14',
  dataSource: 'Live from National Rail data',
  ticket: {
    type: 'Advance Single',
    from: 'Edinburgh Waverley',
    to: 'Manchester Piccadilly',
    price: '£48.60',
    reference: 'TL72591',
  },
  leg1: {
    operator: 'LNER',
    departs: '09:00',
    from: 'Edinburgh Waverley',
    to: 'York',
    scheduledArrival: '11:32',
    expectedArrival: '11:46',
    minutesLate: 14,
    platform: '9',
  },
  leg2: {
    operator: 'TransPennine Express',
    departs: '11:52',
    from: 'York',
    to: 'Manchester Piccadilly',
    arrives: '13:18',
    platform: '4',
  },
  connection: {
    station: 'York',
    minutesAvailable: 6,
    minutesPlanned: 20,
    minutesNeeded: 10,
  },
  nextTrain: {
    operator: 'TransPennine Express',
    departs: '12:22',
    from: 'York',
    to: 'Manchester Piccadilly',
    arrives: '13:48',
    platform: '4',
    extraCost: '£0.00',
    minutesBeforeMeeting: 42,
  },
  /**
   * What the station departure boards show. York arrival is deliberately one
   * minute off from our 11:46, so testers see a real disagreement.
   */
  board: {
    checkedAt: '11:14',
    yorkArrival: { shows: '11:45', platform: '9' },
    leg2Departure: { shows: 'On time', platform: '4' },
    nextDeparture: { shows: 'On time', platform: '4' },
    manchesterArrival: { shows: '13:18' },
  },
} as const

/** "13:48" → minutes since midnight, for working out gaps between times. */
export function toMinutes(time: string) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

/** Whether the York board agrees with our arrival time. In this sample it deliberately doesn't. */
export const yorkArrivalMatchesBoard =
  (journey.board.yorkArrival.shows as string) === journey.leg1.expectedArrival
