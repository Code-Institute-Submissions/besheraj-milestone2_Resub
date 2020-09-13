describe("Game", function () {
    describe(" tests", function () {
        it ("should return You Win case 1", function(){
            let computerChoice='rock'
            let userChoice='paper'
            expect(determineWinner(userChoice, computerChoice)).toBe('You Won!');
        });
        it ("should return You Win case 2", function(){
            let computerChoice='scissors'
            let userChoice='rock'
            expect(determineWinner(userChoice, computerChoice)).toBe('You Won!');
        });
        it ("should return You Win case 3", function(){
            let computerChoice='paper'
            let userChoice='scissors'
            expect(determineWinner(userChoice, computerChoice)).toBe('You Won!');
        });
        it ("should return Computer Win case 1", function(){
            let computerChoice='rock'
            let userChoice='scissors'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Computer Won!');
        });
        it ("should return Computer Win case 2", function(){
            let computerChoice='scissors'
            let userChoice='paper'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Computer Won!');
        });
        it ("should return Computer Win case 3", function(){
            let computerChoice='paper'
            let userChoice='rock'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Computer Won!');
        });
        it ("should return Game is a tie case 1", function(){
            let computerChoice='rock'
            let userChoice='rock'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Game is a tie');
        });
        it ("should return Game is a tie case 2", function(){
            let computerChoice='paper'
            let userChoice='paper'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Game is a tie');
        });
        it ("should return Game is a tie case 3", function(){
            let computerChoice='scissors'
            let userChoice='scissors'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Game is a tie');
        });
        it ("should return Game is a tie case 3", function(){
            let computerChoice='scissors'
            let userChoice='scissors'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Game is a tie');
        });
        it ("should return Game is a tie case 3", function(){
            let computerChoice='scissors'
            let userChoice='scissors'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Game is a tie');
        });
        it ("should return log Error", function(){
            let userChoice='wrong choice'
            spyOn(console, 'log');
            getUserChoice(userChoice)
            expect(console.log).toHaveBeenCalledWith('Error!');
        });
        it ("should return update userscore", function(){
            let computerChoice='scissors'
            let userChoice='scissors'
            expect(determineWinner(userChoice, computerChoice)).toBe('The Game is a tie');
        });
        it ("should return increasing the computer score by 1 & human to be 0", function(){
            let scores = updateScore('The Computer Won!');
            expect(scores.computerScore).toBe(1);
            expect(scores.humanScore).toBe(0); 
        });

        it ("round should be increased by 1", function(){
            advanceRound()
            expect(currentRoundNumber).toBe(2);
        });
    });
});
