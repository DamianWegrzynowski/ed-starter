import { NextResponse } from 'next/server';
import { readFlights } from '@/lib/flights';
import { ALL_STATUSES } from '@/types';
import type { FlightStatus } from '@/types';

export async function GET() {
  const flights = readFlights();

  const stats = ALL_STATUSES.reduce<Record<FlightStatus, number>>((acc, status) => {
    acc[status] = 0;
    return acc;
  }, {} as Record<FlightStatus, number>);

  for (const flight of flights) {
    stats[flight.status]++;
  }

  return NextResponse.json(stats);
}
