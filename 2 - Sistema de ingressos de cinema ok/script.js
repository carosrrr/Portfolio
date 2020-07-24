const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();


let ticketPrice = +movieSelect.value;

//salvar filme selecionado e preço
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Atualizar total e contagem
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// pegar dados do localstorage e popular UI
function populateUI () {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


//select de filme event
movieSelect.addEventListener ("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//evento de click no assento
container.addEventListener("click", e => {
    if (
        e.target.classList.contains("seat") &&
         !e.target.classList.contains("occupied")
        ) {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});

// Contagem total e inicial definida
updateSelectedCount();