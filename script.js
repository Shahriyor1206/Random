const generate =()=>{
   const quotes = [
      'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',

      '“Be yourself; everyone else is already taken.”',

      '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',

      '“A room without books is like a body without a soul.”',

      '“You know youre in love when you cant fall asleep because reality is finally better than your dreams.”',

      '“You only live once, but if you do it right, once is enough.”'

   ];

   let quotesEl = document.querySelector('#quotes');
   let random = Math.floor(Math.random() * quotes.length);

   quotesEl.innerHTML = `${quotes[random]}`;
};
