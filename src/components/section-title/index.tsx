export default function SectionTitle({
  category,
  title,
}: {
  category?: string;
  title?: string;
}) {
  return (
    <div className="text-center pb-10">
      <span className="font-bold text-primary">
        {String(category).toUpperCase()}
      </span>
      <h2 className="text-5xl font-bold py-3">{title}</h2>
    </div>
  );
}
