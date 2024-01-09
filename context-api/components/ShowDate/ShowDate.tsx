import { FunctionComponent } from "react";

const ShowDate: FunctionComponent<{ ms: number }> = ({
  ms,
}: {
  ms: number;
}) => {
  const date = new Date(ms);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month: string = months[date.getMonth()];
  const day: number = date.getDate();
  const year: number = date.getFullYear();
  return (
    <>
      {day} of {month} of <b>{year}</b>
      <br />
    </>
  );
};

export default ShowDate;
