class Main{

    simpleMinutes(minutes){

        if(minutes === 1){
            return "j";
        }
 

        if(minutes === 2){
            return "jj";
        }

        if(minutes === 3){
            return "jjj";
        }
        if(minutes === 4){
            return "jjjj";
        }
    }
}
module.exports = Main;