
var scores=[0,0];
document.querySelector('.cardOne').style.display = 'none';
document.querySelector('.cardTwo').style.display = 'none';

document.querySelector('.btn-deal').addEventListener("click",function() {

    var card_one = Math.floor(Math.random()*13)+1;
    var card_two = Math.floor(Math.random()*13)+1;

    var cardOneDisplay = document.querySelector('.cardOne');
    var cardTwoDisplay = document.querySelector('.cardTwo');

    cardOneDisplay.style.display='block';
    cardTwoDisplay.style.display='block';

    cardOneDisplay.src = card_one+".png";
    cardTwoDisplay.src = card_two+".png";

    if(card_one>card_two){
        scores[0]+=1;
        document.getElementById("score-0").textContent=scores[0];
    }
    else{
        scores[1]+=1;
        document.getElementById("score-1").textContent=scores[1];
    }
    

});

document.querySelector('.btn-newgame').addEventListener("click",function(){
    document.querySelector('.cardOne').style.display = 'none';
    document.querySelector('.cardTwo').style.display = 'none';
    document.getElementById("score-0").textContent=0;
    document.getElementById("score-1").textContent=0;
    scores[1]=0;
    scores[0]=0;
    
});
