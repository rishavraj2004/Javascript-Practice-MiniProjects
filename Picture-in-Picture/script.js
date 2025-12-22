

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediastream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);

    }
}

button.addEventListener('click', async function () {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

//On load
selectMediastream();