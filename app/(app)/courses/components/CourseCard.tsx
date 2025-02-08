interface CourseCardProps {
  key: string;
  description: string;
  title: string;
  backgroundImage?: string;
}

export const CourseCard = ({
  key,
  description,
  title,
  backgroundImage = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
}: CourseCardProps) => {
  return (
    <div className="mb-4">
      <div
        key={key}
        className="rounded bg-white bg-cover p-10 pl-12 dark:bg-neutral-800"
        style={{
          backgroundImage: `linear-gradient(to right, #db277766 5%, #262626 25%), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="text-md mb-6 leading-relaxed text-gray-300">
          {description}
        </p>
        <div className="flex flex-row justify-end">
          <button
            className="primary-button text-sm text-neutral-300 hover:text-white"
            onClick={() => {}}
          >
            Start Course
          </button>
        </div>
      </div>
    </div>
  );
};
