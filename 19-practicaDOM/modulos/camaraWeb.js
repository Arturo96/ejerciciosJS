const d = document,
      n = navigator;

export const camaraWeb = () => {

    const camaraDiv = d.getElementById('camaraWeb');

    const constraints = {
        audio: false,
        video: {
            width: {min: 800},
            height: {min: 600}
        }
    }

    // const lanzarCamara = n.mediaDevices.getUserMedia(constraints)
    //                         .then(mediaStream => {
    //                             let video = d.querySelector('video');
    //                             video.srcObject = mediaStream;
    //                             video.onloadedmetadata = function(e) {
    //                                 video.play();
    //                             };
    //                         })
    //                         .catch(err => console.error(err));
}