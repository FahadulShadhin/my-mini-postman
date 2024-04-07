type PlusProps = {
  fill: string;
  height: string;
  width: string;
};

const Plus = ({ fill, height, width }: PlusProps) => {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 42 42"
      xmlSpace="preserve"
    >
      <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22" />
    </svg>
  );
};

export default Plus;
