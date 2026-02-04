import { useState } from "react";
import Logo from "./components/Logo";
import ScheduleList from "./components/ScheduleList";
import SideBar from "./components/SideBar";
import type { Appointment } from "./types/Appointment";
function App() {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [client, setClient] = useState("");

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  function createAppointment() {
    if (!date || !hour || !client) return;

    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      date,
      hour,
      client,
    };

    setAppointments((prev) => [...prev, newAppointment]);

    setHour("");
    setClient("");
  }


  function removeAppointment(id: string){
    setAppointments((prev) => 
    prev.filter((appointment) => appointment.id !== id))
  }
  return (
    <div className="flex text-gray-100 p-3 relative">
      <Logo />

      <SideBar
        date={date}
        onDateChange={setDate}
        hour={hour}
        onHourChange={setHour}
        client={client}
        onClientChange={setClient}
        appointments={appointments}
        onCreateAppointment={createAppointment}
      />

      <main className="flex-1">
        <ScheduleList
          date={date}
          onDateChange={setDate}
          appointments={appointments}
          onRemoveAppointment={removeAppointment}
        />{" "}
      </main>
    </div>
  );
}

export default App;
