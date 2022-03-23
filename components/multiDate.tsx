import {format, parseISO} from "date-fns";

export default function MultiDate({
    firstDateString,
    secondDateString
}: { firstDateString: string, secondDateString: string }) {
    const firstDate = parseISO(firstDateString);

    const secondDate = parseISO(secondDateString);

    return (
        <>
            <time dateTime={firstDateString}>{format(firstDate, "LLLL, yyyy")}</time>
            {" to "}
            { secondDateString !== "" ?
                <time dateTime={secondDateString}>{format(secondDate, "LLLL, yyyy")}</time>
                :
                "present"
            }
        </>
    );
}