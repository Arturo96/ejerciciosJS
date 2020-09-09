export const scrollToTop = duration => {
    // cancel if already on top
    if (document.documentElement.scrollTop === 0) return;

    const cosParameter = document.documentElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    // Función Step
    const step = (newTimestamp) => {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.documentElement.scrollTop = 0;
            document.documentElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}