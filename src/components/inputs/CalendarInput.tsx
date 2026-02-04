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
        className="absolute top-2 left-3 w-5 pointer-events-none"
        fill="#b8952e"
      />

      <input
        required
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        max="2099-12-31"
        className="
          h-12
          w-full
          bg-transparent
          border-2 border-gray-500
          rounded-lg
          pl-10 pr-10
          outline-0
          focus:border-yellow-dark

          [&::-webkit-calendar-picker-indicator]:absolute
          [&::-webkit-calendar-picker-indicator]:inset-0
          [&::-webkit-calendar-picker-indicator]:w-full
          [&::-webkit-calendar-picker-indicator]:h-full
          [&::-webkit-calendar-picker-indicator]:opacity-0
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
        "
      />

      <CaretDown
        className="absolute top-2 right-3 w-5 pointer-events-none"
        fill="#98959d"
      />
    </div>
  );
}
