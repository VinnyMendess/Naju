function generate(){
    let quotes = {
        "- Ana Julia ": '"Eu sou linda"',
        "- Ana Julia ": '"É inexplicável a pureza do olhar e de palavras de uma criança"',
        "- Vinicius Mendes ": '"A Naju é linda, mas não me engano por essa cobra"',
        "- Vinicius Mendes ": '"Amar é enganar para tentar enxergar a si no coração de outra pessoa, se enganar em atrocidades feitas pela pessoa e venerá-la"',
        "- Vinicius Mendes ": '" Hoje, você está certa... "',
        "- Vinicius Mendes ": '"Odeio quando você não conversa comigo, deveria ser crime"',
        "- Vinicius Mendes ": '" Percebe que a gente só saiu uma vez? "',
        "- Vinicius Mendes ": '" Não sei o que não sei o que lá "',
        "- Vinicius Mendes ": '" A parte corporal mais linda que você tem é seus  olhos, não atoa que os desenhei "',
        "- Vinicius Mendes ": '" As vezes esqueço que você é baixinha k "',
        "- Vinicius Mendes ": '" Chataaaaaaaaaa "',
        "- Vinicius Mendes ": '" Mesmo com trocentas coisas para fazer ainda prefiro arrumar um tempo só pra falar com você "',
        "- Vinicius Mendes 2": '" KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK "'

    };
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random()  * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}
// outra ação
var index = 0;

show_image(index);

function show_image(i){
    index += i;

    var images = document.getElementsByClassName("image-fade");

    var dots = document.getElementsByClassName("dot");

    for(i = 0;i <images.length;i++)
        images[i].style.display = "none";

    for(i = 0;i <dots.length;i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > images.length - 1)
        index = 0;

    if(index < 0)
        index = images.length - 1;

    images[index].style.display = "block";
    dots[index].className += "  active";

}
// outra ação
function createConfetti() {
    const colors = ['#ff0', '#ff4081', '#00e676', '#2979ff', '#ffab00'];
    for (let i = 0; i < 100; i++) {
        createSingleConfetti(colors[Math.floor(Math.random() * colors.length)]);
    }
}
function createConfetti() {
    const colors = ['#ff0', '#ff4081', '#00e676', '#2979ff', '#ffab00'];
    for (let i = 0; i < 100; i++) {
        createSingleConfetti(colors[Math.floor(Math.random() * colors.length)]);
    }
}

function createSingleConfetti(color) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '0px';
    document.body.appendChild(confetti);

    // Animação de queda
    const fallDuration = Math.random() * 2 + 3; // Duração aleatória entre 3 e 5 segundos
    const fallDistance = Math.random() * 100 + 300; // Distância aleatória de queda

    confetti.animate([
        { transform: `translateY(0px)`, opacity: 1 },
        { transform: `translateY(${fallDistance}px)`, opacity: 0 }
    ], {
        duration: fallDuration * 1000,
        easing: 'ease-in',
        fill: 'forwards'
    });

    // Remover o confete após a animação
    setTimeout(() => {
        confetti.remove();
    }, fallDuration * 1000);
}

// outra ação
