interface IProps {
  label?: string;
  placeholder?: string;
  valueGetter: (e: HTMLInputElement | HTMLTextAreaElement) => void;
  type: string;
  value: string;
  id: string;
  name: string;
}

export const BaseInput = ({
  label,
  placeholder,
  valueGetter,
  id,
  value,
  type = "text",
  name,
}: IProps) => {
  const inputEmitter = (e: HTMLInputElement | HTMLTextAreaElement) => {
    valueGetter(e);
  };

  const Component =
    type === "textarea" ? (
      <textarea
        id={id}
        maxLength={400}
        name={name}
        onChange={(event) => inputEmitter(event.target)}
        placeholder={placeholder}
        rows={4}
      />
    ) : (
      <input
        className="bg-[#F7FBFF] border-[0px] ring-1 ring-[#D4D7E3] placeholder:text-[#8897AD] drop-shadow-sm border-[#D4D7E3] rounded-xl max-h-10 h-10 px-4 outline-none text-black"
        id={id}
        name={name}
        onChange={(event) => inputEmitter(event.target)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    );
  const Label = label ? <label htmlFor={id}> {label}</label> : null;

  return (
    <div className="flex flex-col w-full gap-y-1 min-h-max">
      {Label}
      {Component}
    </div>
  );
};
