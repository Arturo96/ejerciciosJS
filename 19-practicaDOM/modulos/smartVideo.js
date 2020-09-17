const d = document;

export const smartVideoFunc = () => {
    const video = d.getElementById("player");        
    
    let playVideo = false;

    const observarVideo = v => {
        if(v[0].isIntersecting) video.play();
        else video.pause();

        addEventListener("visibilitychange", () => 
            d.visibilityState === 'visible' ? video.play()
                                            : video.pause())
        
    };

    const observer = new IntersectionObserver(observarVideo, {
        threshold: 1
    });

    observer.observe(video);


};
