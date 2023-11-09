import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  score: 0,
  userChoice: "",
  computerChoice: "",
  isLoding: false,
  userWin: false,
  isPlaying: false,
  isDraw: false,
  isResult: false,
  isRules: false,
};

let computerOption = ["rock", "paper", "scissors"];

const initializeState = createSlice({
  // name of the state
  name: "reactGame",
  // default state
  initialState,

  // function to manupulate state based on logic
  reducers: {
    // show Rules Box
    showRules: (state, action) => {
      state.isRules = action.payload;
    },
    // set user choice
    setUserChoice: (state, action) => {
      state.userChoice = action.payload;
      state.isPlaying = true;
    },

    // set Computer Choice
    setComputerChoice: (state, action) => {
      state.computerChoice = action.payload;
    },
    //Generate Random ComputerChoice
    calculateResult: (state, action) => {
      let randomIndex = Math.round(Math.random() * (computerOption.length - 1));
      state.computerChoice = computerOption[randomIndex];
      if (state.userChoice === "rock") {
        if (state.computerChoice === "scissors") {
          state.userWin = true;
          state.isResult = true;
          state.score = state.score + 1;
        } else if (state.computerChoice === "rock") {
          state.isDraw = true;
          state.isResult = true;
        } else {
          state.isResult = true;
          state.userWin = false;
          state.score = state.score - 1;
        }
      } else if (state.userChoice === "paper") {
        if (state.computerChoice === "rock") {
          state.userWin = true;
          state.isResult = true;
          state.score = state.score + 1;
        } else if (state.computerChoice === "paper") {
          state.isDraw = true;
          state.isResult = true;
        } else {
          state.isResult = true;
          state.userWin = false;
          state.score = state.score - 1;
        }
      } else if (state.userChoice === "scissors") {
        if (state.computerChoice === "paper") {
          state.userWin = true;
          state.isResult = true;
          state.score = state.score + 1;
        } else if (state.computerChoice === "scissors") {
          state.isDraw = true;
          state.isResult = true;
        } else {
          state.isResult = true;
          state.userWin = false;
          state.score = state.score - 1;
        }
      }
      initialState = state;
    },

    // PlayAgain
    playAgain: (state, action) => {
      state.isPlaying = false;
      state.userWin = false;
      state.isResult = false;
      state.userChoice = "";
      state.computerChoice = "";
      state.isDraw = false;
    },
  },
});

export const { setUserChoice, setComputerChoice, calculateResult, playAgain, showRules } =
  initializeState.actions;
export const gameReducer = initializeState.reducer;
