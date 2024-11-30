const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex justify-between border-b pb-2 border-slate-400">
      <span className="text-xl text-nowrap self-center">
        {icon} <strong>{label}:</strong>
      </span>
      <span className="text-lg text-end">{value}</span>
    </div>
  );
};

export default InfoItem;
