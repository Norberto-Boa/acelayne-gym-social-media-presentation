interface WeekTabsProps {
  selected: number;
  onSelect: (weekIndex: number) => void;
}

export default function WeekTabs({ selected, onSelect }: WeekTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {Array.from({ length: 8 }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index + 1)}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            selected === index + 1
              ? "bg-orange-600 text-white border-orange-600"
              : "bg-white text=gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Semana {index + 1}
        </button>
      ))}
    </div>
  );
}
