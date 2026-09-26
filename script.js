// ================= PLAYER FORM =================

function openPlayerForm() {

    const form = document.getElementById("playerForm");

    form.classList.toggle("hidden");

}


// ================= ADD PLAYER =================

function addPlayer(event) {

    event.preventDefault();

    const name =
        document.getElementById("playerName").value;

    const position =
        document.getElementById("playerPosition").value;

    const number =
        document.getElementById("playerNumber").value;


    const playerList =
        document.getElementById("playerList");


    // Create player card

    const playerCard =
        document.createElement("div");

    playerCard.className = "player-card";


    playerCard.innerHTML = `

        <div class="player-avatar">
            ${number}
        </div>

        <div class="player-info">

            <h3>${name}</h3>

            <p>${position} • #${number}</p>

            <div class="player-stats">

                <span>⚽ 0 Goals</span>

                <span>🎯 0 Assists</span>

            </div>

        </div>

    `;


    playerList.appendChild(playerCard);


    // Update player count

    const playerCount =
        document.getElementById("playerCount");

    const currentCount =
        Number(playerCount.textContent);

    playerCount.textContent =
        currentCount + 1;


    // Clear form

    document.getElementById("playerName").value = "";

    document.getElementById("playerPosition").value = "";

    document.getElementById("playerNumber").value = "";


    // Hide form

    document
        .getElementById("playerForm")
        .classList.add("hidden");

}


// ================= NAVIGATION =================

function showSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


// ================= MOBILE MENU =================

function toggleMenu() {

    const nav =
        document.querySelector(".header nav");


    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "70px";

        nav.style.right = "5%";

        nav.style.background = "#071c12";

        nav.style.padding = "20px";

        nav.style.borderRadius = "10px";

    }

}


// ================= ADD MATCH =================

function addMatch() {

    alert(
        "Match creation will be added in the next version."
    );

}


// ================= FORMATION =================
function changeFormation() {

    const formation =
        document.getElementById("formationSelect").value;

    const players =
        document.querySelectorAll(".football-player");


    // ================= 4-4-2 =================

    if (formation === "4-4-2") {

        players[0].style.left = "50%";
        players[0].style.top = "92%";

        players[1].style.left = "15%";
        players[1].style.top = "72%";

        players[2].style.left = "38%";
        players[2].style.top = "75%";

        players[3].style.left = "62%";
        players[3].style.top = "75%";

        players[4].style.left = "85%";
        players[4].style.top = "72%";

        players[5].style.left = "15%";
        players[5].style.top = "52%";

        players[6].style.left = "38%";
        players[6].style.top = "50%";

        players[7].style.left = "62%";
        players[7].style.top = "50%";

        players[8].style.left = "85%";
        players[8].style.top = "52%";

        players[9].style.left = "38%";
        players[9].style.top = "25%";

        players[10].style.left = "62%";
        players[10].style.top = "25%";
    }


    // ================= 4-3-3 =================

    else if (formation === "4-3-3") {

        players[0].style.left = "50%";
        players[0].style.top = "92%";

        players[1].style.left = "15%";
        players[1].style.top = "72%";

        players[2].style.left = "38%";
        players[2].style.top = "75%";

        players[3].style.left = "62%";
        players[3].style.top = "75%";

        players[4].style.left = "85%";
        players[4].style.top = "72%";

        players[5].style.left = "25%";
        players[5].style.top = "52%";

        players[6].style.left = "50%";
        players[6].style.top = "48%";

        players[7].style.left = "75%";
        players[7].style.top = "52%";

        players[8].style.left = "20%";
        players[8].style.top = "25%";

        players[9].style.left = "50%";
        players[9].style.top = "20%";

        players[10].style.left = "80%";
        players[10].style.top = "25%";
    }


    // ================= 4-2-3-1 =================

    else if (formation === "4-2-3-1") {

        players[0].style.left = "50%";
        players[0].style.top = "92%";

        players[1].style.left = "15%";
        players[1].style.top = "72%";

        players[2].style.left = "38%";
        players[2].style.top = "75%";

        players[3].style.left = "62%";
        players[3].style.top = "75%";

        players[4].style.left = "85%";
        players[4].style.top = "72%";

        players[5].style.left = "35%";
        players[5].style.top = "55%";

        players[6].style.left = "65%";
        players[6].style.top = "55%";

        players[7].style.left = "20%";
        players[7].style.top = "38%";

        players[8].style.left = "50%";
        players[8].style.top = "35%";

        players[9].style.left = "80%";
        players[9].style.top = "38%";

        players[10].style.left = "50%";
        players[10].style.top = "18%";
    }


    // ================= 3-5-2 =================

    else if (formation === "3-5-2") {

        players[0].style.left = "50%";
        players[0].style.top = "92%";

        players[1].style.left = "25%";
        players[1].style.top = "72%";

        players[2].style.left = "50%";
        players[2].style.top = "75%";

        players[3].style.left = "75%";
        players[3].style.top = "72%";

        players[4].style.left = "15%";
        players[4].style.top = "52%";

        players[5].style.left = "35%";
        players[5].style.top = "50%";

        players[6].style.left = "50%";
        players[6].style.top = "48%";

        players[7].style.left = "65%";
        players[7].style.top = "50%";

        players[8].style.left = "85%";
        players[8].style.top = "52%";

        players[9].style.left = "40%";
        players[9].style.top = "25%";

        players[10].style.left = "60%";
        players[10].style.top = "25%";
    }
}
// ================= SAVE FORMATION =================

// ================= FORMATION STORAGE =================

function getSavedFormations() {

    return JSON.parse(
        localStorage.getItem("savedFormations")
    ) || [];

}


// ================= SAVE CURRENT FORMATION =================

function saveFormation() {

    const formation =
        document.getElementById("formationSelect").value;

    const players =
        document.querySelectorAll(".football-player");

    const playerPositions = [];


    // Save the current position of every player

    players.forEach(function(player) {

        playerPositions.push({

            left: player.style.left,

            top: player.style.top

        });

    });


    const formationName =
        prompt("Enter a name for your formation:");


    if (!formationName) {

        return;

    }


    const newFormation = {

        id: Date.now(),

        name: formationName,

        type: formation,

        players: playerPositions

    };


    const savedFormations =
        getSavedFormations();


    savedFormations.push(newFormation);


    localStorage.setItem(
        "savedFormations",
        JSON.stringify(savedFormations)
    );


    displaySavedFormations();

    alert("Formation saved!");

}


// ================= DISPLAY FORMATION LIST =================

function displaySavedFormations() {

    const list =
        document.getElementById(
            "savedFormationsList"
        );


    list.innerHTML = "";


    const savedFormations =
        getSavedFormations();


    if (savedFormations.length === 0) {

        list.innerHTML =
            "<p>No saved formations yet.</p>";

        return;

    }


    savedFormations.forEach(function(formation) {

        const formationBox =
            document.createElement("div");


        formationBox.className =
            "saved-formation";


        formationBox.innerHTML = `

            <div>

                <strong>
                    ${formation.name}
                </strong>

                <span>
                    ${formation.type}
                </span>

            </div>


            <div>

                <button
                    onclick="loadFormation(${formation.id})">
                    Load
                </button>


                <button
                    onclick="deleteFormation(${formation.id})">
                    Delete
                </button>

            </div>

        `;


        list.appendChild(formationBox);

    });

}


// ================= LOAD FORMATION =================

function loadFormation(id) {

    const savedFormations =
        getSavedFormations();


    const formation =
        savedFormations.find(function(item) {

            return item.id === id;

        });


    if (!formation) {

        return;

    }


    // Change dropdown to saved formation

    document.getElementById(
        "formationSelect"
    ).value = formation.type;


    const players =
        document.querySelectorAll(
            ".football-player"
        );


    // Restore every player's saved position

    formation.players.forEach(
        function(position, index) {

            if (players[index]) {

                players[index].style.left =
                    position.left;

                players[index].style.top =
                    position.top;

            }

        }
    );


    alert(
        formation.name +
        " loaded!"
    );

}


// ================= DELETE FORMATION =================

function deleteFormation(id) {

    let savedFormations =
        getSavedFormations();


    const formation =
        savedFormations.find(function(item) {

            return item.id === id;

        });


    if (!formation) {

        return;

    }


    const confirmDelete =
        confirm(
            "Delete " +
            formation.name +
            "?"
        );


    if (!confirmDelete) {

        return;

    }


    savedFormations =
        savedFormations.filter(function(item) {

            return item.id !== id;

        });


    localStorage.setItem(
        "savedFormations",
        JSON.stringify(savedFormations)
    );


    displaySavedFormations();

}


// ================= RESET FORMATION =================

function resetFormation() {

    changeFormation();

}


// ================= LOAD SAVED FORMATIONS =================

function displaySavedFormations() {

    const select =
        document.getElementById(
            "savedFormationSelect"
        );


    // Clear the old options

    select.innerHTML = `

        <option value="">
            Select a saved formation
        </option>

    `;


    const savedFormations =
        getSavedFormations();


    // Add every saved formation
    // to the dropdown

    savedFormations.forEach(function(formation) {

        const option =
            document.createElement("option");


        option.value =
            formation.id;


        option.textContent =
            formation.name +
            " (" +
            formation.type +
            ")";


        select.appendChild(option);

    });

}
///loadddddd
function loadSelectedFormation() {

    const select =
        document.getElementById(
            "savedFormationSelect"
        );


    const selectedId =
        Number(select.value);


    if (!selectedId) {

        alert("Please select a formation first.");

        return;

    }


    loadFormation(selectedId);

}
///delettt
function deleteSelectedFormation() {

    const select =
        document.getElementById(
            "savedFormationSelect"
        );


    const selectedId =
        Number(select.value);


    if (!selectedId) {

        alert("Please select a formation first.");

        return;

    }


    deleteFormation(selectedId);

}
// ================= DRAG PLAYERS =================

const footballPlayers =
    document.querySelectorAll(".football-player");

const footballPitch =
    document.getElementById("pitch");


footballPlayers.forEach(function(player) {

    player.addEventListener("pointerdown", function(event) {

        event.preventDefault();

        player.setPointerCapture(event.pointerId);

        player.style.cursor = "grabbing";


        function movePlayer(event) {

            const pitchRect =
                footballPitch.getBoundingClientRect();


            /*
                Find where the mouse/finger
                is inside the pitch.
            */

            let x =
                event.clientX - pitchRect.left;

            let y =
                event.clientY - pitchRect.top;


            /*
                Stop the player from going
                outside the pitch.
            */

            const playerWidth =
                player.offsetWidth / 2;

            const playerHeight =
                player.offsetHeight / 2;


            x = Math.max(
                playerWidth,
                Math.min(
                    x,
                    pitchRect.width - playerWidth
                )
            );


            y = Math.max(
                playerHeight,
                Math.min(
                    y,
                    pitchRect.height - playerHeight
                )
            );


            /*
                Convert the position into
                percentages.
            */

            const xPercent =
                (x / pitchRect.width) * 100;

            const yPercent =
                (y / pitchRect.height) * 100;


            /*
                Move the player.
            */

            player.style.left =
                xPercent + "%";

            player.style.top =
                yPercent + "%";

        }


        function stopMoving() {

            player.style.cursor = "grab";

            player.removeEventListener(
                "pointermove",
                movePlayer
            );

            player.removeEventListener(
                "pointerup",
                stopMoving
            );

        }


        player.addEventListener(
            "pointermove",
            movePlayer
        );

        player.addEventListener(
            "pointerup",
            stopMoving
        );

    });

});


// ================= SEARCH =================

function searchFootball() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const cards =
        document.querySelectorAll(".public-card");


    cards.forEach(function(card) {

        const text =
            card.textContent.toLowerCase();


        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}