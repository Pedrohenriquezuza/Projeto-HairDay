import CalendarIcon from "../../assets/icons/CalendarBlank.svg?react";
import CaretDown from "../../assets/icons/CaretDown.svg?react";
type Props = {
  value: string;
  onChange: (date: string) => void;
};
export default function CalendarInput({ value, onChange }: Props) {
  return (
    <div className="relative mt-2">
      <CalendarIcon
        className="absolute top-2 left-3
       w-5"
        fill="#b8952e"
      />

      <input
        required
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        max="2099-12-31"
        className="h-12 mr-3
    bg-transparent
    w-full
    [&::-webkit-calendar-picker-indicator]:opacity-0 border-2 border-gray-500 rounded-lg pl-10 relative outline-0 focus:border-2 focus:border-yellow-dark
  "
      />
      <CaretDown
        className="absolute top-2 right-3
       w-5 "
        fill="#98959d"
      />
    </div>
  );
}
