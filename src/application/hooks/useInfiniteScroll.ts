import { useEffect } from 'react';
import { useItemStore } from '@/stores/useItemStore';

export const useInfiniteScroll = (
    ref: React.RefObject<HTMLElement>,
    enabled: boolean
) => {
    const loadNextPage = useItemStore((state) => state.loadNextPage);

    useEffect(() => {
        const el = ref.current;
        if (!enabled || !el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    loadNextPage();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        observer.observe(el);

        return () => {
            observer.unobserve(el);
            observer.disconnect();
        };
    }, [enabled, ref.current, loadNextPage]);
};
