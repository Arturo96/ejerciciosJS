const d = document,
    timeBanner = 4000;

export const estadoConexion = () => {

    const bannerDisconnect = d.getElementById('banner--disconnect'), 
          bannerConnect = d.getElementById('banner--connect');

    addEventListener('online', () => {
        bannerConnect.classList.add("show");
        
        setTimeout(() => {
            bannerConnect.classList.remove("show");
            
        }, timeBanner)

    })

    addEventListener('offline', () => {
        bannerDisconnect.classList.add("show");
        setTimeout(() => {
            bannerDisconnect.classList.remove("show")
        }, timeBanner)

    })
}