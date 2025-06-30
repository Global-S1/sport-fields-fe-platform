import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface Props {
  date: DateValueType;
  changeDate: (date: DateValueType) => void;
}

export default function FilterDate({ date, changeDate }: Props) {
  return (
    <article>
      <h4 className="text-lg font-semibold mb-3">Escoger fechas</h4>

      <Datepicker
        useRange={false}
        asSingle={true}
        value={date}
        onChange={(newValue) => changeDate(newValue)}
        // inputClassName="w-full py-2 px-4 text-left border border-main-800 rounded-xl"
      />
    </article>
  );
}
