const currentPlayer = document.querySelector(".currentPlayer");
let selected;
let player = "x";
/*posições possivéis para ter um ganhador*/
let positions = [
    [1, 2, 3,],
    [4, 5, 6,],
    [7, 8, 9,],
    [1, 4, 7,],
    [2, 5, 8,],
    [3, 6, 9,],
    [1, 5, 9,],
    [3, 5, 7,],


];

function init() {
    console.log("teste");
    selected = []
    currentPlayer.innerHTML = `JOGADOR DA VEZ:${player}`;
    /*cada botão será iniciado sem valor*/
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}
function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;

    console.log(selected);
    setTimeout(() => {
        check();

    }, [100]);

    /*intercala os jogadores entre x e o*/
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ:${player}`;

    
}


function check() {
     let playerLastMove = player === "X" ? "O" : "X";
    const items = selected
        .map((item, i) => [item, i])
        .filter((item) => item[0] === playerLastMove)
        .map((item) => item[1]);






    console.log("teste");


    for (pos of positions) {
        if (pos.every((item) => items.includes(item))) {
            alert(" O jogador " + playerLastMove + " GANHOU ");
            init();
            return;
        }
    }
    if (selected.filter((item) => item).length === 9) {
        alert("DEU EMPATE!");
        init();
        return;
    }
}

init();
