
const Skeleton = () => (
  <div className="max-w-4xl mx-auto p-6">
    <div className="flex animate-pulse space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 rounded bg-gray-200"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="h-2 rounded bg-gray-200"></div>
          </div>
          <div className="h-2 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Skeleton