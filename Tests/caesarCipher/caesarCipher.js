
function caesarCipher(text,shift){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArr = alphabet.split("");
    let textArr = text.split("");

    let shiftedText = "";


    textArr.forEach(letter => {

            //first check if its not letter
        if (!letter.match(/[a-z]/i)) {
            shiftedText = shiftedText + letter.toString();
            return;
        }

        //second we must save the case statement of letter
        let toUpperCase = false;
        if (letter === letter.toUpperCase()) {
            toUpperCase = true;
            letter = letter.toLowerCase();
        }

        let letterIndex = alphabetArr.indexOf(letter);

        for (let i = 0; i < shift; i++) {
            if(letterIndex === (alphabetArr.length - 1)){
                letterIndex = 0;
            }
            else{
                letterIndex += 1;
            }
            
        }
        
        let newLetter = alphabetArr[letterIndex];
        if (toUpperCase) {
            newLetter = newLetter.toUpperCase();
        }
        shiftedText = shiftedText + newLetter;
    });
    return shiftedText;


}

module.exports = caesarCipher;