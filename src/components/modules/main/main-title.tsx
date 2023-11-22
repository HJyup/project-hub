const MainTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-1 md:w-[600px]">
      <h2 className="text-xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm md:text-md text-muted-foreground">{description}</p>
    </div>
  );
};

export default MainTitle;
