interface CourseProgressProps {
  percentage: number;
  title: string;
}

export const CourseProgress = ({ percentage = 0, title }: CourseProgressProps) => {
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="pb-4">
      <h2 className="mb-4 text-2xl">Latest Progress</h2>
      <div className="flex h-64 flex-col items-center justify-center bg-neutral-800">
        <h2 className="text-md mb-4 text-white">{title}</h2>
        <div className="relative h-40 w-40">
          {/* Background Circle */}
          <svg
            className="h-full w-full rotate-90 transform"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="gray"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
          </svg>

          {/* Progress Circle */}
          <svg className="absolute left-0 top-0 h-full w-full">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#ea4c89"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: "stroke-dashoffset 0.35s ease-out",
                transformOrigin: "center",
                transform: "rotate(-90deg)",
              }}
            />
          </svg>

          {/* Percentage */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-transparent">
            <div className="text-4xl font-bold text-white">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 