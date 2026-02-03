import CalendarInput from "./inputs/CalendarInput";
import Text from "./Text";
import type { Appointment } from "../types/Appointment";

const hoursByPeriod = [
  {
    label: "Manhã",
    hours: ["09:00", "10:00", "11:00", "12:00"],
  },
  {
    label: "Tarde",
    hours: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  {
    label: "Noite",
    hours: ["19:00", "20:00", "21:00"],
  },
];

interface ScheduleListProps {
  date: string;
  onDateChange: (date: string) => void;
  appointments: Appointment[];
}

export default function ScheduleList({
  date,
  onDateChange,
  appointments,
}: ScheduleListProps) {
  const appointmentsByDate = appointments.filter(
    (appointment) => appointment.date === date,
  );

  return (
    <div className="py-20 px-28 flex-1">
      <header className="flex justify-between max-w-full">
        <div>
          <Text as="h2" variant="title-lg-bold">
            Sua agenda
          </Text>
          <Text as="p" className="mt-4">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <CalendarInput value={date} onChange={onDateChange} />
      </header>

      {!date && (
        <Text as="p" className="mt-10 text-gray-400">
          Selecione uma data para ver os agendamentos
        </Text>
      )}

      {date &&
        hoursByPeriod.map((period) => {
          const periodAppointments = appointmentsByDate.filter((appointment) =>
            period.hours.includes(appointment.hour),
          );

          return (
            <div key={period.label} className="mt-10">
              <Text as="h3" variant="title-md-bold">
                {period.label}
              </Text>

              {periodAppointments.length === 0 && (
                <Text as="p" className="mt-2 text-gray-400">
                  Você ainda não tem agendamentos cadastrados nesse período.
                </Text>
              )}

              <div className="mt-4 space-y-2">
                {periodAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
                  >
                    <Text as="p" variant="title-sm-bold">
                      {appointment.hour}
                    </Text>
                    <Text as="p" className="text-gray-300">
                      {appointment.client}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
