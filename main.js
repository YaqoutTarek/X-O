let dashboard = document.querySelector(`.dashboard`)
let turn = `x`
let squares = [];

function operation(n1,n2,n3) {
    dashboard.innerHTML= `${squares[n1]} winner`
    document.getElementById(`i`+n1).style.backgroundColor= `black`
    document.getElementById(`i`+n2).style.backgroundColor= `black`
    document.getElementById(`i`+n3).style.backgroundColor= `black`
    setInterval(function(){dashboard.innerHTML +=`.`},1000)
    setTimeout(function(){location.reload()},4000)
}

function winner () {
    console.log(`ss`)
    for ( let i=1; i<10; i++) {
        squares[i] = document.querySelector(`#i`+ i).innerHTML;
    }
    if (squares[1] == squares[2] && squares [2] == squares[3] && squares[1] != ``) {
        operation(1,2,3)
    } else if (squares[4] == squares[5] && squares [5] == squares[6] && squares[5] != ``) {
        operation(4,5,6)
    } else if (squares[7] == squares[8] && squares [8] == squares[9] && squares[9] != ``) {
        operation(7,8,9)
    } else if (squares[1] == squares[4] && squares [4] == squares[7] && squares[1] != ``) {
        operation(1,4,7)
    } else if (squares[2] == squares[5] && squares [5] == squares[8] && squares[2] != ``) {
        operation(2,5,8)
    } else if (squares[3] == squares[6] && squares [6] == squares[9] && squares[3] != ``) {
        operation(3,6,9)
    } else if (squares[1] == squares[5] && squares [5] == squares[9] && squares[1] != ``) {
        operation(1,5,9)
    } else if (squares[3] == squares[5] && squares [5] == squares[7] && squares[3] != ``) {
        operation(3,5,7)
    }
}

function game(id) {
    let element = document.getElementById(id)
    if (turn===`x` && element.innerHTML == ``) {
        element.innerHTML = `X`;
        turn = `o`;
        dashboard.innerHTML= `O`;
    } else if (turn===`o` && element.innerHTML == ``) {
        element.innerHTML = `O`;
        turn = `x`;
        dashboard.innerHTML= `X`;
    }
    winner();
}