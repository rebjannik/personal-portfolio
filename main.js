const showPicture = () => {
    document.getElementById('picture').style.display = "block";
    document.getElementById("reset").style.display = "block";
    document.getElementById("show").style.display = "none";
  } 

  const hidePicture = () => {
      document.getElementById('picture').style.display = "none";
      document.getElementById("reset").style.display = "none";
    document.getElementById("show").style.display = "block";
  }