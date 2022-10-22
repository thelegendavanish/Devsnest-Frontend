#container {
    /* container styles for reference, don't edit these */
    position: fixed;
    z-index: 3;
    height: 250px;
    width: 250px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    border: 1px solid black;
    grid-template-areas: "green green green green" "green green green green" "violet violet violet violet" "violet violet violet violet";
    /* Code here */
}

#darkseagreen-box {
    background-color: darkseagreen;
    grid-area: green;
    /* Code here */
}

#palevioletred-box {
    background-color: palevioletred;
  grid-area: violet; 
    /* Code here */
}
