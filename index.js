let weather = prompt(`
    Select weather:
    1-Sunny 
    2-Rainy 
    3-Cloudy 
    4-Windy 
    5-Winter 
    6-Summer  
    7-Stormy  
    8-Snowy 
    9-Autumn  
    10-Spring  
`).toLowerCase();

if(weather === "sunny"){
document.writeln(`
   <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(231, 237, 148);"><div class="card  d-flex  " style="width: 18rem;align-items-center; justify-content: center;">
  <img src="https://i.pinimg.com/originals/3a/2a/8f/3a2a8f79d9d4a7d36a258fb129ba36f9.gif" class="card-img-top" alt="sunny gif image">
  <div class="card-body">
    <h5 class="card-title">Sunny Weather ☀️</h5>
    <p class="card-text">Sunny weather is bright and hot. <br>
The sun shines in the sky. <br>
We feel warm and happy.</p>
    
  </div>
  `);
} else if (weather === "rainy"){
    document.writeln(` 
      <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden; background-color: rgb(125, 202, 223);">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/88/17/1f/88171fa7dd99abbbdd9b6f0f2693862e.gif" class="card-img-top" alt="rainy fig image">
  <div class="card-body">
    <h5 class="card-title">Rainy Weather 🌧️</h5>
    <p class="card-text">Rainy weather brings rain from the clouds. <br>
The weather becomes cool. <br>
We use umbrellas and raincoats.</p>
    
  </div>
</div>
</div>
     `);
    }else if (weather === "cloudy"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: darkgray;">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/b6/7f/61/b67f61a1364ea22a050d701c7bf7858f.gif" class="card-img-top" alt="cloudy gif image">
  <div class="card-body">
    <h5 class="card-title">Cloudy Weather ☁️</h5>
    <p class="card-text">In cloudy weather, the sky is full of clouds. <br>
The sun is not clearly seen. <br>
It may rain anytime.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "windy"){
  document.writeln(`  
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(236, 226, 169)">
<div class="card" style="width: 18rem;">
  <img src="https://clipart-library.com/image_gallery/n807194.gif" alt="windy gif image">
  <div class="card-body">
    <h5 class="card-title">Windy Weather 🌬️</h5>
    <p class="card-text">Windy weather has strong and fast winds. <br>
Trees and leaves move a lot. <br>
Kites fly high in the sky.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "winter"){
  document.writeln(` 
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(124, 163, 216)">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/f7/86/11/f7861111e7f273466b5e746a670031ba.gif" class="card-img-top" alt="winter gif image">
  <div class="card-body">
    <h5 class="card-title">Winter Weather ❄️</h5>
    <p class="card-text">Cold weather is very chilly. <br>
We wear warm clothes. <br>
Sometimes there is fog or snow.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "summer"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(211, 246, 155);">
<div class="card" style="width: 18rem;">
  <img src="https://media.tenor.com/MIKY8TfBNjkAAAAM/hot-cat.gif" class="card-img-top" alt="summer gif imag">
  <div class="card-body">
    <h5 class="card-title">Summer Weather 🔥</h5>
    <p class="card-text">Hot weather is very warm. <br>
The sun shines very strong. <br>
We drink water and wear light clothes.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "stormy"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(152, 176, 196);">
<div class="card" style="width: 18rem;">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyc2l4MTZiZnpvZzRrYWs1bmQyeTFrcDZya290cDZ3NmJ3ejU1OHdseSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EVf8tbnlr77Es/source.gif" class="card-img-top" alt="stormy gif image">
  <div class="card-body">
    <h5 class="card-title">Stormy Weather ⛈️</h5>
    <p class="card-text">Stormy weather has strong winds and rain. <br>
There may be thunder and lightning. <br>
We stay safe indoors.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "snowy"){
  document.writeln(`
     <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgb(184, 216, 239);">
<div class="card" style="width: 18rem;">
  <img src="https://lh6.googleusercontent.com/proxy/RTsGuLOSwxSJutqsfNt1Moa8xe5hYbSurGcgi8zNQvkmojCD25wbqZGUhaJ_skDumb5wc-RjfVyR3Yys9UKchUDSQTPDbllIoEpUC32Iwk_u" class="card-img-top" alt="snowy gif image">
  <div class="card-body">
    <h5 class="card-title">Snowy Weather ❄️</h5>
    <p class="card-text">Snowy weather is very cold. <br>
Snow falls from the sky. <br>
Everything looks white and beautiful.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "autumn"){
  document.writeln(`
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgba(228, 204, 109, 0.963)">
<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/be/67/7a/be677a3195053e6dc4a6023b17f59c58.gif" class="card-img-top" alt="autumn gif image">
  <div class="card-body">
    <h5 class="card-title">Autumn Weather 🍁</h5>
    <p class="card-text">Autumn is a pleasant season.
The weather is cool and nice. <br>
Leaves change color and fall from trees.</p>
    
  </div>
</div>
</div>
    `);
} else if(weather === "spring"){
  document.writeln(`
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;width: 100vw;overflow: hidden;background-color: rgba(147, 236, 153, 0.96)">
<div class="card" style="width: 18rem;">
  <img src="https://www.deelplaatjes.nl/upload_gif/deelplaatjes-nl-lente-de-zon-schijnt-de-bloemen-bloeien.438779.gif" class="card-img-top" alt="spring gif image">
  <div class="card-body">
    <h5 class="card-title">Spring Weather 🌸</h5>
    <p class="card-text">Spring is a beautiful and pleasant season. <br>
Flowers bloom and trees become green. <br>
The weather is fresh and nice.</p>
    
  </div>
</div>
</div>
    `);
} else{
 document.writeln(` <div class="d-flex align-item-center justify-content-center" style="height: 100vh; width: 100vw;  <img src="https://i.pinimg.com/originals/ba/5b/61/ba5b613b625e1013284f588943cd6e15.gif">
  <img src="data:image/png;base64,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" alt="invalid image">
 </div>`)
}
  