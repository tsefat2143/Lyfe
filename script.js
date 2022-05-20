const words = [
    "What makes me more productive: coffee or nap?",
    "Do I have better sleep when I don't eat sweets?",
    "What contributed to an increase in my weight recently?",
    "What makes my mood better?",
];
let i = 0;

let typingEffect = () => {
  let word = words[i].split("");
  if(word.length == 45){
    document.querySelector('.search-field span').style.color='#5B4EEA'
    document.getElementsByClassName('typed-cursor')[0].style.color='#5B4EEA'
  }
  else if(word.length == 47){
    document.querySelector('.search-field span').style.color='#42A7D3'
    document.getElementsByClassName('typed-cursor')[0].style.color='#42A7D3'
  }
  else if(word.length == 54){
    document.querySelector('.search-field span').style.color='#FF6978'
    document.getElementsByClassName('typed-cursor')[0].style.color='#FF6978'
  }
  else if(word.length == 26){
    document.querySelector('.search-field span').style.color='#F08142'
    document.getElementsByClassName('typed-cursor')[0].style.color='#F08142'
  }
  let loopTyping = () => {
    if (word.length > 0) {
      let elem = document.querySelector('.search-field span');
      elem.innerHTML += word.shift()
    } else {
      setTimeout(() => {
        deletingEffect();    
      }, 1000);  
      
      return false;
    };
    setTimeout(loopTyping, 90);
  };
  loopTyping();
};

let deletingEffect = () => {
  let word = words[i].split("");
  let loopDeleting = () => {
    if (word.length > 0) {
      word.pop();
      document.querySelector('.search-field span').innerHTML = word.join("")
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    setTimeout(loopDeleting, 50);
  };
  loopDeleting();
};

typingEffect();