export default function SectionHeader({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 py-6">
      {title}
    </h1>
  );
}
