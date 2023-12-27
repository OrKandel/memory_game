
const array = [ "אמא", "אבא","הדס","הודיה","נריה","ניתאי","עמנואל","טליה","מוריה"];//"א", "ב", "ג", "ד", "ה",
const toShuffle = array.concat(array);
function shuffle(toShuffle) {//ערבוב הקלפים
    let temp;
    for (let i = 0; i < toShuffle.length * 2; i++) {
        let random1 = Math.floor(Math.random() * toShuffle.length);
        let random2 = Math.floor(Math.random() * toShuffle.length);
        temp = toShuffle[random1];
        toShuffle[random1] = toShuffle[random2];
        toShuffle[random2] = temp;
    }
    return toShuffle;
}

let mix = shuffle(toShuffle)

if (1 == 2) {
    console.log("mix: ", mix);

    let hiden = [];

    for (let j = 0; j <= mix.length - 1; j++) {
        hiden.push("*")
    }
    console.log("hiden: ", hiden);


    while (hiden.includes("*")) {
        let n1 = prompt("n1:")
        alert(mix[n1])
        let n2 = prompt("n2:")
        alert(mix[n2])
        if (n1 != n2) {

            console.log(test(hiden, n1, n2))
        }

    }
    function test(hiden, n1, n2) {
        if (mix[n1] == mix[n2]) {
            alert("👌")
            hiden[n1] = mix[n1]
            hiden[n2] = mix[n2]

        }
        return (hiden)
    }

}
function init() {
    let cnt = 0;
    const boardElement = document.getElementsByClassName("board")[0]
    // const cardElement =document.createElement("div")
    // cardElement.className="card"
    // מקטלג את האלמנט החדש שיצרנו בתוך האלמנט הקיים
    // boardElement.appendChild(cardElement)

    // יוצר  10 קלפים ומקטלג אותם
    toShuffle.forEach(cardValue => {
        const cardElement = document.createElement("div")
        cardElement.className = "card"
        cardElement.id = "a"+cnt;
        cardElement.value = cardValue
        cardElement.onclick = clickCard
        // מקטלג את האלמנט החדש שיצרנו בתוך האלמנט הקיים
        boardElement.appendChild(cardElement)
        cnt++
    })
    let test1;
    let test2;
    let cnt1 = 0;
let firstID;
// הקלקה על כרטיס
function clickCard(e) {
    
            if (cnt1 == 0) {
                //TODO להשתמש בקאונטר כך שאם זה הראשון רק יציג הערך, אם זה השני יעשה גם השוואה, וגם יפסיק להציג הערך אם לא זהים וכו'
                // debugger
                // console.log(e.target.value,cnt1);
                test1 = e.target.value
                firstID=e.target.id;
                e.target.innerText = test1
                this.style.background = "white"
                cnt1++
                console.log(test1);
            }
            else {
                if (firstID==e.target.id){
                    alert("choose anothr card")
                }
                else{
                test2 = e.target.value
                e.target.innerText = test2
                cnt1 = 0
                console.log(test2);
                this.style.background = "white"
                if (test1 == test2) {
                    alert("כל הכבוד - אלוף!!!👌")
                }
                else {
                    setTimeout(clear,2000)
                    
                    function clear(){
                    test1=""
                    test2=""
                    e.target.innerText = ""
                    console.log(e.target);
                    // e.target.style.background = "green"
                    document.getElementById(firstID).innerText = ""
                    e.target.style.backgroundImage = "url('card-game.gif')"
                    e.target.style.backgroundSize= "cover";
                    document.getElementById(firstID).style.backgroundImage = "url('card-game.gif')"
                    document.getElementById(firstID).style.backgroundSize= "cover";
                }
                    
                }}
            
 } 
}}

init()

