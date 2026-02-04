import Text from "../Text";
import type { Appointment } from "../../types/Appointment";

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

type Props = {
  value: string;
  onChange: (hour: string) => void;
  date: string;
  appointments: Appointment[];
};

export default function Hours({ value, onChange, date, appointments }: Props) {
  return (
    <div className="space-y-4 mt-8">
      {hoursByPeriod.map((period) => (
        <div key={period.label} className="space-y-2">
          <Text as="h3" variant="text-sm-regular">
            {period.label}
          </Text>

          <div className="flex flex-wrap gap-2">
            {period.hours.map((hour) => {
              const isSelected = hour === value;
              const isOccupied = appointments.some(
                (a) => a.date === date && a.hour === hour,
              );

              return (
                <button
                  type="button"
                  key={hour}
                  disabled={isOccupied}
                  onClick={() => onChange(hour)}
                  className={`
                    h-10 w-19.5 rounded-xl text-sm border-2 hover:bg-gray-500
                    ${
                      isOccupied
                        ? "bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed"
                        : isSelected
                          ? "bg-gray-600 border-yellow text-yellow"
                          : "bg-gray-600 border-gray-500"
                    }
                  `}
                >
                  {hour}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
