function myrps(myimage){
    
    var humanchoice,botchoice;
    humanchoice = myimage.id;
    botchoice = NumberToChoice(rsprandom());
    
    var results = decideWinner(humanchoice,botchoice);
    
    var message = finalmessage(results);
    
    rspfrontend(humanchoice,botchoice,message);

    function rsprandom() {
        return Math.floor(Math.random()*3);
        
    }

    function NumberToChoice(number) {
        return ['rock','paper','scissors'][number];

        
    }
    

    function decideWinner(humanchoice, botchoice){
        var choicedatabase={
            'rock':{'rock':0.5,'paper':0,'scissors':1},
            'paper': { 'rock': 1, 'paper': 0.5, 'scissors':0},
            'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5},
        }
        var yourscore = choicedatabase[humanchoice][botchoice];
        var botscore = choicedatabase[botchoice][humanchoice];
        return [yourscore,botscore];
    }

    function finalmessage([yourscore,botscore]) {
        if (yourscore===0) {
            return {'message':'You Loose!','color':'red'};
            
        }
        else if(yourscore===1){
            return { 'message': 'You Won!', 'color': 'green'};
        }

        else{
            return { 'message': 'You Tied!', 'color': 'yellow'};
        }

        
    }
    function rspfrontend(humanchoice, botchoice, message){
        var imagedatabase={
            'rock': document.getElementById("rock").src,
            'paper':  document.getElementById("paper").src,
            'scissors': document.getElementById("scissors").src
        }
        humandiv = document.createElement('div');
        messagediv = document.createElement('div');
        botdiv = document.createElement('div');
        
        humandiv.innerHTML = "<img src='" + imagedatabase[humanchoice] +  "'  style='box-shadow:0px 10px 10px rgb(98, 168, 151);height:150px;width:150px' >";
        messagediv.innerHTML = "<h1 style='color:" + message['color'] + ";" + " font-size:60px;  padding:10px'>"+message['message']  +"</h1>"
        botdiv.innerHTML = "<img src='" + imagedatabase[botchoice] +  "'  style='box-shadow:0px 10px 10px red;height:150px;width:150px'>";

        document.getElementById("container-2").appendChild(humandiv);
        document.getElementById("container-2").appendChild(messagediv);
        document.getElementById("container-2").appendChild(botdiv);


    }
        document.getElementById("rock").remove();
        document.getElementById("paper").remove();
        document.getElementById("scissors").remove();
}