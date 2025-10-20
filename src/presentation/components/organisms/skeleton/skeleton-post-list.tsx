
import { SkeletonPostItem } from "../../molecules/skeleton-item/skeleton-post-item";

export const SkeletonPostList = (): JSX.Element => {
    const repeat = Array.from({ length: 36 }, (_, i) => i + 1)
    return (
        <div className="w-full p-6 bg-gray-500 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 animate-pulse ">
                    {repeat.map((n) => (
                        <SkeletonPostItem key={n} />
                    ))}
                </div>
            </div>
        </div>

    );
};
