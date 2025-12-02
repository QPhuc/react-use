// src/useScrollToTop.ts
// A custom hook that provides a function to scroll the window to the top smoothly.
// Usage: const scrollToTop = useScrollToTop();
// Then call scrollToTop() to scroll to the top of the page.
export default function useScrollToTop(): () => void {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return scrollToTop;
}