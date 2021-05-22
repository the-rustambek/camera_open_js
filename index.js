
const videoElement=document.querySelector("#videoElement")

async function main(){
    let media =await window.navigator.mediaDevices.getUserMedia({
        video:true
    
    })
    videoElement.srcObject=media
}

main()
