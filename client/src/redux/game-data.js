// GAME DATA -- REDUCER
// ==============================

// IMPORT FROM FILES
const cars = require("../shared/cars.json")
const events = require("../shared/events.json")
// const question = require("../shared/questions.json")

//////////////////////////
// INITIAL STATE OBJECT //
//////////////////////////


let initialGameData = {
    raceData: {
        sequence0: {
            carOrder: []
        },
        sequence1: {
            name: "staringline",
            locationDescription: "stuff happens at the startingline",
            raceDescription: "",
            carOrder: [],
            crashedCars: []
        },
        sequence2: {
            name: "spiral",
            locationDescription: "PLACEHOLDER stuff happens on a SPIRAL",
            raceDescription: "",
            carOrder: [],
            crashedCars: []
        },
        sequence3: {
            name: "plateau",
            locationDescription: "PLACEHOLDER stuff happens on a plateau",
            raceDescription: "",
            carOrder: [],
            crashedCars: []
        },
        sequence4: {
            name: "beach",
            locationDescription: "PLACEHOLDER stuff happens on a beach",
            raceDescription: "",
            carOrder: [],
            crashedCars: []
        },
        sequence5: {
            name: "finishline",
            locationDescription: "PLACEHOLDER stuff happens at the finishline",
            raceDescription: "",
            carOrder: [],
            crashedCars: []
        }
    },
    questions: {
        question1: {
            text: "",
            correct_values: []

        },
        question2: {

        },
        question3: {

        },
        question4: {

        },
        question5: {

        }
    },
    scoreCard: {

    }
}

/////////////////////
// ACTION CREATORS //
/////////////////////

// HELPER FUNCTIONS 
const randomOf = (num) => {
    return Math.floor(Math.random() * num)
}

const screenEvents = (events, checker) => {
    return events.filter(event => {
        return event.locations.some(location => (location === checker))
    });
}

const screenCars = (sequence, availableCars, eventType) => {
    let carOrder = [...sequence]
    switch (eventType) {
        case ("crash"):
            return availableCars[randomOf(availableCars.length - 1)];
        case ("advance"):
            carOrder.shift();
            availableCars = carOrder.filter(carInSequence => {
                return availableCars.some(carInAvailable => (carInAvailable === carInSequence));
            })
            return availableCars[randomOf(availableCars.length - 1)];
        case ("fall_behind"):
            carOrder.pop();
            availableCars = carOrder.filter(carInSequence => {
                return availableCars.some(carInAvailable => (carInAvailable === carInSequence));
            })
            return availableCars[randomOf(availableCars.length - 1)];
            ;
        case (""):
            return availableCars[randomOf(availableCars.length - 1)];
    }
}

const advanceCar = (arr, index) => {
    [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]]
    return arr
}

const fallbehindCar = (arr, index) => {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
    return arr
}

const crashCar = (sequence, potentialCars, index) => {
    potentialCars.splice(potentialCars.indexOf(sequence[index]), 1)
    let crashedCar = sequence.splice(index, 1)[0]
    return {
        crashedCar,
        potentialCars,
        sequence
    }
}

const compileDescription = (event) => {
    return (event.description1 + event.description1_car +
        event.description2 + event.description2_car +
        event.description3 + event.description3_car +
        event.description4)
}

const eventPhaseSwitch = (event, phase, sequence, availableCars, index) => {
    switch (phase) {
        case ("phase1"):
            return eventChange(event.description1_type, sequence, availableCars, index);
        case ("phase2"):
            return eventChange(event.description2_type, sequence, availableCars, index);
        case ("phase3"):
            return eventChange(event.description3_type, sequence, availableCars, index);
    }
}

const eventChange = (type, sequence, potentialCars, indexOfChange) => {
    switch (type) {
        case ("crash"):
            let crashData = crashCar(sequence, potentialCars, indexOfChange)
            return {
                carOrder: crashData.sequence,
                availableCars: crashData.potentialCars,
                crashedCar: crashData.crashedCar
            };
        case ("advance"):
            potentialCars.splice(potentialCars.indexOf(sequence[indexOfChange]), 1)
            return {
                carOrder: advanceCar(sequence, indexOfChange),
                availableCars: potentialCars,
                crashedCar: "",
            };
        case ("fall_behind"):
            potentialCars.splice(potentialCars.indexOf(sequence[indexOfChange]), 1)
            return {
                carOrder: fallbehindCar(sequence, indexOfChange),
                availableCars: potentialCars,
                crashedCar: "",
            };
        case (""):
            potentialCars.splice(potentialCars.indexOf(sequence[indexOfChange]), 1)
            return {
                carOrder: sequence,
                availableCars: potentialCars,
                crashedCar: ""
            };
    }
};

// START GAME
const startGame = (gameData) => {
    // DECLARE VARIABLES
    let potentialEvents = [...events]
    // MAP THE CAR IDS
    let carNames = cars.map(car => {
        return car.name
    })
    // RANDOMIZE INITAL ORDER OF THE RACE
    for (let i = carNames.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [carNames[i], carNames[j]] = [carNames[j], carNames[i]];
    }
    // ESTABLISH CARS INITIAL SEQUENCE
    let sequence0 = gameData.raceData.sequence0
    sequence0 = [...carNames]
    // ESTABLISH CARS FOR DESCRIPTION AND CHANGE SEQUENCE FOR STARTING LINE
    let startingLine = potentialEvents[0]
    startingLine.description1_car = sequence0[0]

    // // // // // // // // // // // // // // // // // // // // // // //
    //////////////////// E V E N T    1 ////////////////////////////////
    // // // // // // // // // // // // // // // // // // // // // // //

    // ADVANCING CAR FROM THE STARTING LINE
    let availableCars = [sequence0[1], sequence0[2], sequence0[3], sequence0[4]]
    let advancingCar = availableCars[randomOf(4)];
    startingLine.description2_car = advancingCar;
    let advancingIndex = sequence0.indexOf(advancingCar)
    let sequence1Phase2 = advanceCar(sequence0, advancingIndex)

    // FALLING BEHIND CAR FROM THE STARTING LINE
    availableCars.splice(advancingIndex, 1);
    availableCars = [availableCars[0], availableCars[1]]

    let fallingCar = availableCars[randomOf(2)];
    startingLine.description3_car = fallingCar;
    let fallbehindIndex = sequence1Phase2.indexOf(fallingCar)
    let sequence1Phase3 = fallbehindCar(sequence1Phase2, fallbehindIndex);

    // POPULATE SEQUENCE 1 & RACE DESCRIPTION
    gameData.raceData.sequence1.raceDescription = compileDescription(startingLine) +
        `${sequence1Phase3[0]} in first, followed by ${sequence1Phase3[1]}, ${sequence1Phase3[2]}, ${sequence1Phase3[3]}, 
        and finally ${sequence1Phase3[4]} bringing up the rear.`;
    gameData.raceData.sequence1.carOrder = [...sequence1Phase3]

    // // // // // // // // // // // // // // // // // // // // // // //
    //////////////////// E V E N T    2 ////////////////////////////////
    // // // // // // // // // // // // // // // // // // // // // // //
    // ASSIGN STARTER VALUES
    let sequence2Phase0 = [...gameData.raceData.sequence1.carOrder]
    availableCars = [...sequence2Phase0]
    let secondEvent = screenEvents(potentialEvents, "spiral")[randomOf(4)]
    potentialEvents.splice(potentialEvents.indexOf(secondEvent), 1)

    // FIRST EVENT PHASE CHANGE
    let eventCar = screenCars(sequence2Phase0, availableCars, secondEvent.description1_type)
    secondEvent.description1_car = eventCar
    let eventCarIndex = sequence2Phase0.indexOf(eventCar)
    let eventOutputs = eventPhaseSwitch(secondEvent, "phase1", sequence2Phase0, availableCars, eventCarIndex);
    // Assign Values
    let sequence2Phase1 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence2.crashedCars = [...gameData.raceData.sequence2.crashedCars, eventOutputs.crashedCar]
    }

    // SECOND EVENT PHASE CHANGE
    eventCar = screenCars(sequence2Phase1, availableCars, secondEvent.description2_type)
    secondEvent.description2_car = eventCar
    eventCarIndex = sequence2Phase1.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(secondEvent, "phase2", sequence2Phase1, availableCars, eventCarIndex);
    //AssignValues
    let sequence2Phase2 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence2.crashedCars = [...gameData.raceData.sequence2.crashedCars, eventOutputs.crashedCar]
    }

    // THIRD EVENT PHASE CHANGE
    eventCar = screenCars(sequence2Phase2, availableCars, secondEvent.description3_type)
    secondEvent.description3_car = eventCar
    eventCarIndex = sequence2Phase2.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(secondEvent, "phase3", sequence2Phase2, availableCars, eventCarIndex);
    //AssignValues
    let sequence2Phase3 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence2.crashedCars = [...gameData.raceData.sequence2.crashedCars, eventOutputs.crashedCar]
    }
    // POPULATE SEQUENCE 2 & RACE DESCRIPTION
    gameData.raceData.sequence2.raceDescription = compileDescription(secondEvent)
    gameData.raceData.sequence2.carOrder = [...sequence2Phase3]

    // // // // // // // // // // // // // // // // // // // // // // //
    //////////////////// E V E N T    3 ////////////////////////////////
    // // // // // // // // // // // // // // // // // // // // // // //
    //ASSIGN STARTER VALUES
    let sequence3Phase0 = [...gameData.raceData.sequence2.carOrder]
    availableCars = [...sequence3Phase0]
    gameData.raceData.sequence3.crashedCars = [...gameData.raceData.sequence2.crashedCars]
    let plateauEvents = screenEvents(potentialEvents, "plateau")
    let thirdEvent = plateauEvents[randomOf(plateauEvents.length)]
    potentialEvents.splice(potentialEvents.indexOf(thirdEvent), 1)

    // FIRST EVENT PHASE CHANGE
    eventCar = screenCars(sequence3Phase0, availableCars, thirdEvent.description1_type)
    thirdEvent.description1_car = eventCar
    eventCarIndex = sequence3Phase0.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(thirdEvent, "phase1", sequence3Phase0, availableCars, eventCarIndex);
    // Assign Values
    let sequence3Phase1 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence3.crashedCars = [...gameData.raceData.sequence3.crashedCars, eventOutputs.crashedCar]
    }

    // SECOND EVENT PHASE CHANGE
    eventCar = screenCars(sequence3Phase1, availableCars, thirdEvent.description2_type)
    thirdEvent.description2_car = eventCar
    eventCarIndex = sequence3Phase1.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(thirdEvent, "phase2", sequence3Phase1, availableCars, eventCarIndex);
    //AssignValues
    let sequence3Phase2 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence3.crashedCars = [...gameData.raceData.sequence3.crashedCars, eventOutputs.crashedCar]
    }

    // THIRD EVENT PHASE CHANGE
    eventCar = screenCars(sequence3Phase2, availableCars, thirdEvent.description3_type)
    thirdEvent.description3_car = eventCar
    eventCarIndex = sequence3Phase2.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(thirdEvent, "phase3", sequence3Phase2, availableCars, eventCarIndex);
    //AssignValues
    let sequence3Phase3 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence3.crashedCars = [...gameData.raceData.sequence3.crashedCars, eventOutputs.crashedCar]
    }

    // POPULATE SEQUENCE 3 & RACE DESCRIPTION
    gameData.raceData.sequence3.raceDescription = compileDescription(thirdEvent)
    gameData.raceData.sequence3.carOrder = [...sequence3Phase3]


    // // // // // // // // // // // // // // // // // // // // // // //
    //////////////////// E V E N T    4 ////////////////////////////////
    // // // // // // // // // // // // // // // // // // // // // // //
    //ASSIGN STARTER VALUES
    let sequence4Phase0 = [...gameData.raceData.sequence3.carOrder]
    availableCars = [...sequence4Phase0]
    gameData.raceData.sequence4.crashedCars = [...gameData.raceData.sequence3.crashedCars]
    let beachEvents = screenEvents(potentialEvents, "beach")
    let fourthEvent = beachEvents[randomOf(plateauEvents.length)]
    potentialEvents.splice(potentialEvents.indexOf(fourthEvent), 1)

    // FIRST EVENT PHASE CHANGE
    eventCar = screenCars(sequence4Phase0, availableCars, fourthEvent.description1_type)
    fourthEvent.description1_car = eventCar
    eventCarIndex = sequence4Phase0.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(fourthEvent, "phase1", sequence4Phase0, availableCars, eventCarIndex);
    // Assign Values
    let sequence4Phase1 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence4.crashedCars = [...gameData.raceData.sequence4.crashedCars, eventOutputs.crashedCar]
    }

    // SECOND EVENT PHASE CHANGE
    eventCar = screenCars(sequence4Phase1, availableCars, fourthEvent.description2_type)
    fourthEvent.description2_car = eventCar
    eventCarIndex = sequence4Phase1.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(fourthEvent, "phase2", sequence4Phase1, availableCars, eventCarIndex);
    //AssignValues
    let sequence4Phase2 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence4.crashedCars = [...gameData.raceData.sequence4.crashedCars, eventOutputs.crashedCar]
    }

    // THIRD EVENT PHASE CHANGE
    eventCar = screenCars(sequence4Phase2, availableCars, fourthEvent.description3_type)
    fourthEvent.description3_car = eventCar
    eventCarIndex = sequence4Phase2.indexOf(eventCar)
    eventOutputs = eventPhaseSwitch(fourthEvent, "phase3", sequence4Phase2, availableCars, eventCarIndex);
    //AssignValues
    let sequence4Phase3 = [...eventOutputs.carOrder];
    availableCars = eventOutputs.availableCars
    if (eventOutputs.crashedCar !== "") {
        gameData.raceData.sequence4.crashedCars = [...gameData.raceData.sequence4.crashedCars, eventOutputs.crashedCar]
    }

    // POPULATE SEQUENCE 4 & RACE DESCRIPTION
    gameData.raceData.sequence4.raceDescription = compileDescription(fourthEvent)
    gameData.raceData.sequence4.carOrder = [...sequence4Phase3]

    // // // // // // // // // // // // // // // // // // // // // // //
    /////////////////////// FINISH LINE ////////////////////////////////
    // // // // // // // // // // // // // // // // // // // // // // //
    let sequence5Phase0 = [...gameData.raceData.sequence4.carOrder]
    availableCars = [...sequence4Phase0]
    gameData.raceData.sequence5.crashedCars = [...gameData.raceData.sequence4.crashedCars]
    let finishline = potentialEvents[1];
    
    // FIRST EVENT PHASE 
    let firstPlaceCar = sequence5Phase0[0]
    finishline.description1_car = firstPlaceCar

    // SECOND EVENT PHASE
    let secondPlaceCar = sequence5Phase0[1]
    finishline.description2_car = secondPlaceCar

    // FINAL EVENT PHASE CHANGE
    let winnerCounter = randomOf(2);
    if (winnerCounter === 0) {
        finishline.description3_car = firstPlaceCar;
        let sequence5Phase3 = sequence5Phase0
    } else if (winnerCounter === 1) {
        finishline.description3_car = secondPlaceCar;
        let sequence5Phase3 = advanceCar(sequence5Phase0, 1)
    } 

    // POPULATE SEQUENCE 4 & RACE DESCRIPTION
    gameData.raceData.sequence4.raceDescription = compileDescription(fourthEvent)
    gameData.raceData.sequence4.carOrder = [...sequence4Phase3]

    gameData.active = true
    // RETURN GAME DATA OBJECT
    return { 
        type: "START_GAME",
        payload: gameData
        }   
}

startGame(initialGameData);

/////////////
// REDUCER //
/////////////

let game = (prevData = {active: false, data: initalGameData}, action) => {
    switch(action.type) {
        case("START_GAME"):
            return {
                active: true,
                data: action.payload
            }
        ;
        default: 
        return prevData;
    }
}

export default game
