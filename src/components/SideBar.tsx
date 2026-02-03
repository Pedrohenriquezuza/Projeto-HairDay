import CalendarInput from "./inputs/CalendarInput";
import ClientInput from "./inputs/ClientInput";
import Hours from "./inputs/Hours";
import SubmitButton from "./inputs/SubmitButton";
import Text from "./Text";

import type { Appointment } from "../types/Appointment";

interface SidebarProps {
  date: string;
  onDateChange: (date: string) => void;

  hour: string;
  onHourChange: (hour: string) => void;

  client: string;
  onClientChange: (client: string) => void;

  appointments: Appointment[];

  onCreateAppointment: () => void;
}

export default function SideBar({
  date,
  onDateChange,
  hour,
  onHourChange,
  client,
  onClientChange,
  appointments,
  onCreateAppointment,
}: SidebarProps) {
  function handleCreateAppontment(e: React.FormEvent) {
    e.preventDefault();
    onCreateAppointment();
  }
  return (
    <aside className="max-h-243.75 w-full max-w-130.5  p-20 bg-gray-700 rounded-xl text-gray-100 sm:max-h-203.75">
      <header>
        <Text as="h1" variant={"title-lg-bold"}>
          Agende um atendimento
        </Text>
        <Text as="p" variant={"text-sm-regular"} className="mt-4">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </header>

      <form className="mt-6" onSubmit={handleCreateAppontment}>
        <fieldset className="date">
          <Text as="label" variant={"title-md-bold"}>
            Data
            <CalendarInput value={date} onChange={onDateChange} />
          </Text>
        </fieldset>

        <fieldset className="time">
          <Hours
            value={hour}
            onChange={onHourChange}
            date={date}
            appointments={appointments}
          />
        </fieldset>

        <fieldset className="time mt-8">
          <Text as="label" variant={"title-md-bold"}>
            Cliente
            <ClientInput value={client} onChange={onClientChange} />
          </Text>
        </fieldset>

        <SubmitButton onClick={onCreateAppointment}>
          <Text as="h2" variant="title-sm-bold" className="text-gray-900">
            AGENDAR
          </Text>
        </SubmitButton>
      </form>
    </aside>
  );
}
