import ProfileIcon from "../../assets/icons/UserSquare.svg?react";

type Props = {
  value: string;
  onChange: (client: string) => void;
};

export default function ClientInput({ value, onChange }: Props) {
  return (
    <div className="relative">
      <ProfileIcon fill="#b8952e" className="absolute w-5 top-2 left-3" />
      <input
        required
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nome do cliente"
        className="h-12 border-2 border-gray-500 rounded-lg w-full pl-9  text-gray-200 placeholder:text-gray-200"
      />
    </div>
  );
}
