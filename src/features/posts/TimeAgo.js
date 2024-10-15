import { parseISO } from "date-fns";
import { formatDistanceToNow } from "date-fns";

const TimeAgo = ({timestamp})=>{
    const date = parseISO(timestamp);
    const timeperiod = formatDistanceToNow(date);
    const timeago = `${timeperiod} ago`
    return(
        <>
        {timeago}
        </>
    );
}

export default TimeAgo