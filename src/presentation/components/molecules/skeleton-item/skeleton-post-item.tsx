

export const SkeletonPostItem = (): JSX.Element => {
    return (
        <div className="border border-gray-600 rounded-lg p-4 shadow-sm bg-gray-400 animate-pulse">
            <div className="h-5 bg-gray-600 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-5/6"></div>
        </div>
    );
};
