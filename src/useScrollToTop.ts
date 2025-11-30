export default function useScrollToTop (): () => void {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return scrollToTop;
}