import { Calendar } from "@/shared/components/calendar/calendar";
import { Button } from "@/shared/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { LuCalendar } from "react-icons/lu";

interface Props {
  date: Date;
  changeDate: (date: Date) => void;
}

export default function FilterDate({ date, changeDate }: Props) {
  const t = useTranslations("public.pages.sportFields.filterModal.filters");

  return (
    <article>
      <h4 className="text-lg font-semibold mb-3">Escoger fechas</h4>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!date}
            className="w-full py-2 h-auto px-4 justify-start border border-main-800 rounded-xl"
          >
            <LuCalendar />
            {date ? format(date, "dd/MM/yyyy") : <span>{t("date")}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto mt-1">
          <Calendar
            mode="single"
            selected={date}
            onSelect={changeDate}
            required
            captionLayout="dropdown"
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>
    </article>
  );
}
