import CalendarInput from "./inputs/CalendarInput";
import SunHorizon from "../assets/icons/SunHorizon.svg?react";
import CloudSun from "../assets/icons/CloudSun.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";
import TrashIcon from "../assets/icons/TrashIcon.svg?react";
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
  onRemoveAppointment: (id: string) => void;
}

export default function ScheduleList({
  date,
  onDateChange,
  appointments,
  onRemoveAppointment,
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

          const isMorning = period.label === "Manhã";
          const isAfternoon = period.label === "Tarde";
          const isNight = period.label === "Noite";

          return (
            <div
              key={period.label}
              className="mt-10 border border-gray-600 rounded-lg "
            >
              <div className="flex justify-between px-5 py-3 border-b border-b-gray-600">
                <div className="flex gap-3  ">
                  {isMorning && (
                    <div className="text-gray-400 text-sm">
                      <SunHorizon className="w-5 h-5" fill="#b8952e" />
                    </div>
                  )}
                  {isAfternoon && (
                    <div className="text-gray-400 text-sm">
                      <CloudSun className="w-5 h-5" fill="#b8952e" />
                    </div>
                  )}
                  {isNight && (
                    <div className="text-gray-400 text-sm">
                      <MoonStars className="w-5 h-5" fill="#b8952e" />
                    </div>
                  )}
                  <Text as="h3" variant="title-md-bold">
                    {period.label}
                  </Text>
                </div>
                <div>
                  {isMorning && (
                    <div className="text-gray-400 text-sm">09h-12h</div>
                  )}
                  {isAfternoon && (
                    <div className="text-gray-400 text-sm">13h-18h</div>
                  )}
                  {isNight && (
                    <div className="text-gray-400 text-sm">19h-21h</div>
                  )}
                </div>
              </div>
              {periodAppointments.length === 0 && (
                <Text as="p" className="mt-2 text-gray-400">
                  Você ainda não tem agendamentos cadastrados nesse período.
                </Text>
              )}

              <div className="p-5">
                {periodAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="
    relative group
    flex justify-between items-center
    rounded-lg mt-1 mb-1 pb-2
  "
                  >
                    <div className="flex">
                      <Text as="p" variant="title-md-bold" className="mr-5">
                        {appointment.hour}
                      </Text>

                      <Text as="p" className="text-gray-300">
                        {appointment.client.charAt(0).toUpperCase() +
                          appointment.client.slice(1).toLowerCase()}
                      </Text>
                    </div>

                    <div className="cursor-pointer">
                      <TrashIcon
                        onClick={() => onRemoveAppointment(appointment.id)}
                        className="w-4 h-4"
                        fill="#b8952e"
                      />
                    </div>

                    <span
                      className="
      pointer-events-none
      absolute left-0 bottom-0
      h-0.5 w-full
      bg-yellow
      scale-x-0
      origin-left
      transition-transform duration-300
      group-hover:scale-x-100
    "
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
