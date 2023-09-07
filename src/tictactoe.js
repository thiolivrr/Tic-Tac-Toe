const main = document.querySelector('main')
const squares = document.querySelectorAll('.square')
let statusPlayer = document.querySelector('#Status')
const start = document.getElementById('start')
const resetBtn = document.getElementById('reset')
let player1Input = ""
let player2Input = ""

start.addEventListener('click', function () {
    player1Input = document.querySelector('#player1').value
    player2Input = document.querySelector('#player2').value
    let index = 0

    let s1 = document.getElementById('square1')
    let s2 = document.getElementById('square2')
    let s3 = document.getElementById('square3')
    let s4 = document.getElementById('square4')
    let s5 = document.getElementById('square5')
    let s6 = document.getElementById('square6')
    let s7 = document.getElementById('square7')
    let s8 = document.getElementById('square8')
    let s9 = document.getElementById('square9')

    squares.forEach(function refresh(cell) {
        cell.addEventListener('click', function play() {
            if (index != 1) {
                index = 0
            }
            if (index === 0) {
                cell.innerText = 'O'
                cell.removeEventListener('click', play)
                if (player1Input == "") {
                    statusPlayer.innerText = "X's Turn"
                    checkWin()
                } else
                    statusPlayer.innerText = `${player1Input}'s Turn`
                checkWin()
            } else {
                cell.innerText = 'X'
                cell.removeEventListener('click', play)
                if (player2Input == "") {
                    statusPlayer.innerText = "O's Turn"
                    checkWin()
                } else
                    statusPlayer.innerText = `${player2Input}'s Turn`
                checkWin()
            }
            index++
        })

        function checkWin() {
            if ((s1.innerText == 'X') && (s2.innerText == 'X') && (s3.innerText == 'X')) {
                console.log(player1Input + 'won')
                s1.style.backgroundColor = '#F2E9DC'
                s2.style.backgroundColor = '#F2E9DC'
                s3.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
                s4.removeEventListener('click', play)
                s5.removeEventListener('click', play)
                s6.removeEventListener('click', play)
                s7.removeEventListener('click', play)
                s8.removeEventListener('click', play)
                s9.removeEventListener('click', play)
            }
            else if ((s4.innerText == 'X') && (s5.innerText == 'X') && (s6.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s4.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s6.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s7.innerText == 'X') && (s8.innerText == 'X') && (s9.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s7.style.backgroundColor = '#F2E9DC'
                s8.style.backgroundColor = '#F2E9DC'
                s9.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s1.innerText == 'X') && (s4.innerText == 'X') && (s7.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s1.style.backgroundColor = '#F2E9DC'
                s4.style.backgroundColor = '#F2E9DC'
                s7.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s2.innerText == 'X') && (s5.innerText == 'X') && (s8.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s2.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s8.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s3.innerText == 'X') && (s6.innerText == 'X') && (s9.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s3.style.backgroundColor = '#F2E9DC'
                s6.style.backgroundColor = '#F2E9DC'
                s9.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s1.innerText == 'X') && (s5.innerText == 'X') && (s9.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s1.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s9.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s3.innerText == 'X') && (s5.innerText == 'X') && (s7.innerText == 'X')) {
                console.log(player1Input + 'X won')
                s3.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s7.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player1Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            if ((s1.innerText == 'O') && (s2.innerText == 'O') && (s3.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s1.style.backgroundColor = '#F2E9DC'
                s2.style.backgroundColor = '#F2E9DC'
                s3.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s4.innerText == 'O') && (s5.innerText == 'O') && (s6.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s4.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s6.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s7.innerText == 'O') && (s8.innerText == 'O') && (s9.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s7.style.backgroundColor = '#F2E9DC'
                s8.style.backgroundColor = '#F2E9DC'
                s9.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s1.innerText == 'O') && (s4.innerText == 'O') && (s7.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s1.style.backgroundColor = '#F2E9DC'
                s4.style.backgroundColor = '#F2E9DC'
                s7.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s2.innerText == 'O') && (s5.innerText == 'O') && (s8.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s2.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s8.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s3.innerText == 'O') && (s6.innerText == 'O') && (s9.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s3.style.backgroundColor = '#F2E9DC'
                s6.style.backgroundColor = '#F2E9DC'
                s9.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s1.innerText == 'O') && (s5.innerText == 'O') && (s9.innerText == 'O')) {
                console.log(player2Input + 'won')
                s1.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s9.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s3.innerText == 'O') && (s5.innerText == 'O') && (s7.innerText == 'O')) {
                console.log(player2Input + 'O won')
                s3.style.backgroundColor = '#F2E9DC'
                s5.style.backgroundColor = '#F2E9DC'
                s7.style.backgroundColor = '#F2E9DC'
                statusPlayer.innerText = `${player2Input}'s Won`
                statusPlayer.style.color = `#679436`
            }
            else if ((s1.innerText != "") && (s2.innerText != "") && (s3.innerText != "") && (s4.innerText != "") && (s5.innerText != "") && (s6.innerText != "") && (s7.innerText != "") && (s8.innerText != "") && (s9.innerText != "")) {
                statusPlayer.innerText = `It's a Tie`
            }
        }

        resetFunction()

        function resetFunction() {
            resetBtn.addEventListener('click', function () {
                s1.innerText = ''
                s2.innerText = ''
                s3.innerText = ''
                s4.innerText = ''
                s5.innerText = ''
                s6.innerText = ''
                s7.innerText = ''
                s8.innerText = ''
                s9.innerText = ''
                s1.style.backgroundColor = '#141414'
                s2.style.backgroundColor = '#141414'
                s3.style.backgroundColor = '#141414'
                s4.style.backgroundColor = '#141414'
                s5.style.backgroundColor = '#141414'
                s6.style.backgroundColor = '#141414'
                s7.style.backgroundColor = '#141414'
                s8.style.backgroundColor = '#141414'
                s9.style.backgroundColor = '#141414'
                statusPlayer.innerText = ""
                statusPlayer.style.color = `#F3E9DC`
            })
        }
    })
})
