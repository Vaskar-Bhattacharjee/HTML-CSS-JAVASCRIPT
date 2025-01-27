function cardAnimation() {
    const card = document.querySelector('.card');
    const card1 = document.querySelector('.card1');
    
    const button = document.querySelector('.btn');
    card.classList.toggle('rotate');
    card1.classList.toggle('rotate');
    const text = "Stop Animation";
    const isRotated = card.classList.contains('rotate');
    
    button.textContent 
    = card.classList.contains('rotate') ? 'Stop Animation' : 'Start Animation';
    const btn_background = isRotated? button.classList.add('color') : button.classList.remove('color')  ;
  
}
