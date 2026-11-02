export type TrainingSessionTiming = {
  date?: string;
  dateTime?: string;
  endTime?: string;
};

const danishMonths: Record<string, number> = {
  januar: 0,
  februar: 1,
  marts: 2,
  april: 3,
  maj: 4,
  juni: 5,
  juli: 6,
  august: 7,
  september: 8,
  oktober: 9,
  november: 10,
  december: 11,
};

const parseEndTime = (endTime?: string): { hour: number; minute: number } => {
  const match = endTime?.match(/(\d{1,2})[:.](\d{2})/);
  if (!match) return { hour: 23, minute: 59 };
  return { hour: Number(match[1]), minute: Number(match[2]) };
};

const resolveSessionDay = (session: TrainingSessionTiming): Date | null => {
  const iso = session.dateTime?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));

  const match = session.date?.match(/(\d+)\s+([a-zA-ZæøåÆØÅ]+)\s+(\d{4})/);
  if (!match) return null;

  const month = danishMonths[match[2].toLowerCase()];
  if (month === undefined) return null;

  return new Date(Number(match[3]), month, Number(match[1]));
};

/**
 * A training session is "past" once its end time has passed in local time.
 * Used to automatically deactivate session cards on the training pages.
 */
export const isPastSession = (
  session: TrainingSessionTiming,
  now: Date = new Date(),
): boolean => {
  const day = resolveSessionDay(session);
  if (!day) return false;

  const { hour, minute } = parseEndTime(session.endTime);
  const end = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minute);

  return end.getTime() < now.getTime();
};
