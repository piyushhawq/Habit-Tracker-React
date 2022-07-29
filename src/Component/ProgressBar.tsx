interface IProps {
  percentage: string;
}

export default function ProgressBar({ percentage }: IProps) {
  const styleForProgressBar = {
    width: percentage,
    backgroundColor: "#867CB5",
    height: "8px",
    borderRadius: "24px",
  };

  return (
    /**
     * This is the progressbar component which takes percentage to show the progress. And displaying the progressbar in the card.
     */
    <div className="h-2 w-full bg-slate-200 rounded-3xl">
      <div style={styleForProgressBar}></div>
    </div>
  );
}
