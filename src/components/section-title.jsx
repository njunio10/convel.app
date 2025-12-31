export default function SectionTitle({ title, description }) {
  return (
    <div className="mt-15 flex flex-col items-center justify-center">
      <h3 className="text-center heading-2 text-brand-dark">{title}</h3>
      <p className="mt-3 max-w-xs text-center subtitle text-brand-dark/70 md:max-w-lg">
        {description}
      </p>
    </div>
  );
}
