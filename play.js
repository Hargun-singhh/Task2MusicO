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


MyPB.addEventListener('change', ()=>{
  audioElement.currentTime = MyPB.value * audioElement.duration /100;
})

  const volumeRange = document.getElementById('volumeRange');
  const volumeValue = document.getElementById('volumeValue');

  volumeRange.addEventListener('input', function() {
    const volume = this.value;
    volumeValue.textContent = volume;
    audioElement.volume = volume / 100;
  });

repeatButton.addEventListener('click' ,function(){
  isRepeat = !isRepeat;
  if(isRepeat){
    audioElement.loop = true;
    console.log("repeat");
    repeatButton.style.color = "purple";
  }else{
    audioElement.loop = false;
    console.log('repeat off');
    repeatButton.style.color = "white";
  }
});

document.getElementById('searchInput').addEventListener('input', function() {
      var searchInput = this.value.toLowerCase();
      var items = document.querySelectorAll('#songls');

  
      items.forEach(function(item) {
          var itemName = item.textContent.toLowerCase();
  
          if (itemName.includes(searchInput)) {
              item.style.display = 'block';
              
          } else {
              item.style.display = 'none';
          }
      });
  });
  window.onscroll = function() {myFunction()};
