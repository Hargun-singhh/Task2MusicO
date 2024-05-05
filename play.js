  masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
    }

})

audioElement.addEventListener('timeupdate', ()=>{
    Progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    MyPB.value=Progress;
})


