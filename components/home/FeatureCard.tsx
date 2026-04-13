function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div
      className={`${color} bg-opacity-40 p-8 rounded-3xl text-left border border-white/20 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="bg-white/60 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-dark">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
export default FeatureCard;
