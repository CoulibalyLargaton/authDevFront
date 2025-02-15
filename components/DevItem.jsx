export const DevItem = ({number, title, description}) => {
  return (
    <div className="flex gap-6 mb-8">
      <div className="flex-shrink-0 bg-yellow-500 w-16 h-16 flex items-center justify-center mx-auto">
        <span className="text-xl font-bold">{number}</span>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};
