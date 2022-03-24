import { format, parseISO } from "date-fns";

export default function MonthYearDate({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL, yyyy")}</time>;
}