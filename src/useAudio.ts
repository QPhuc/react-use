import createHTMLMediaHook from "./factory/createHTMLMediaHook";

// Create a hook specifically for audio elements
// Usage: const [audioProps, audioRef] = useAudio(src, options);
// audioProps can be spread onto an <audio> element
// audioRef is a ref to the audio element
const useAudio = createHTMLMediaHook<HTMLAudioElement>('audio');
export default useAudio;