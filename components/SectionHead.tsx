export default function SectionHead({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <header className="section__head">
      <span className="section__label">{label}</span>
      <h2 className="section__title">{title}</h2>
    </header>
  );
}
