type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl border-b border-neutral-200 pb-8 dark:border-neutral-800">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
          {eyebrow}
        </p>
      ) : undefined}
      <h1 className="text-4xl font-semibold leading-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </header>
  );
}
