let score=JSON.parse(localStorage.getItem('score'))||
    {
        wins:0,
        losses:0,
        ties:0
    };
    updateScoreElement();
    //     if(score===null){
    //         if(score===null){
    //         score={
    //             wins:0,
    //             losses:0,
    //             ties:0
    //         }; 
    //     }
    // }
    let isAutoPlaying= false;
    let interValid;
    function autoPlay(){
        if(!isAutoPlaying){
            interValid=setInterval(()=>{
                const playerMove = pickComputerMove();
                playGame(playerMove);
            },1000);
            isAutoPlaying=true;
        }else{
            clearInterval(interValid);
            isAutoPlaying=false;
        }
    }
    function pause(){
        const buttonElement = document.querySelector('.auto-play-button');
        if(buttonElement.innerHTML===`<img src="https://play-lh.googleusercontent.com/n_t-GAERnlvPvtMyB9JnkXBbMMtdfoEmwPWeFqkvd84FaXfRRFouWeGgrFxk1jcnJfM" alt="">`){
            buttonElement.innerHTML="<img src='https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2022-02/pause.png?itok=62F6E_KY' alt=''>";
        }else{
            buttonElement.innerHTML="<img src='https://play-lh.googleusercontent.com/n_t-GAERnlvPvtMyB9JnkXBbMMtdfoEmwPWeFqkvd84FaXfRRFouWeGgrFxk1jcnJfM' alt=''>";
        }
    }
    function playGame(playerMove){
        const computerMove = pickComputerMove();
            let result='';
        if(playerMove==='rock'){
            if(computerMove==='rock'){
                result='Tie';
            }
            else if(computerMove==='paper'){
                result='You lose';
            }
            else if(computerMove==='scissors'){
                result='You won';
            }
        }else if(playerMove==='paper'){
            if(computerMove==='rock'){
                result='You won';
            }
            else if(computerMove==='paper'){
                result='Tie';
            }
            else if(computerMove==='scissors'){
                result='You lose';
            }
        }else if(playerMove==='scissors'){
            if(computerMove==='rock'){
                result='You lose';
            }
            else if(computerMove==='paper'){
                result='You won';
            }
            else if(computerMove==='scissors'){
                result='Tie';
            }
        }
        if(result==='You won'){
            score.wins+=1;
        }else if(result==='You lose'){
            score.losses+=1;
        }else if(result==='Tie'){
            score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result')
            .innerHTML=result;
        document.querySelector('.js-move')
            .innerHTML=`You picked ${playerMove}. Computer picked ${computerMove}`;
    }
    function updateScoreElement(){
        document.querySelector('.js-score')
            .innerHTML=`Wins:${score.wins}, Losses:${score.losses} Ties:${score.ties}`;
    }
    function pickComputerMove(){
            const randomNumber = Math.random();
            let computerMove='';
            if(randomNumber>=0 && randomNumber<1/3){
                computerMove='rock';
            }else if(randomNumber>=1/3 && randomNumber<2/3){
                computerMove='paper';
            }else if(randomNumber>=2/3 && randomNumber<1){
                computerMove='scissors';
            }
            return computerMove;
    }
    
    
