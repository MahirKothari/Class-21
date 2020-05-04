function bounceOff(m,f){
    if (m.x - f.x < f.width/2 + m.width/2
      && f.x - m.x < f.width/2 + m.width/2) {
    m.velocityX = m.velocityX * (-1);
    f.velocityX = f.velocityX * (-1);
  }
  if (m.y - f.y < f.height/2 + m.height/2
    && f.y - m.y < f.height/2 + m.height/2){
    m.velocityY = m.velocityY * (-1);
    f.velocityY = f.velocityY * (-1);
  }
  }

  function isTouching(m,f){
    if (m.x-f.x<=m.width/2+f.width/2 && 
      f.x-m.x<=f.width/2+m.width/2 &&
       m.y-f.y<=m.height/2+f.height/2 &&
       f.y-m.y<=f.height/2+m.height/2) {
      return true
       }
       else {
      return false
       }
  }