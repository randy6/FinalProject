/* This is where the functionality will take place. */

/* Render the Board */
export const loadBoard = function () {
    return `<div id="Planner-Side" class="split left">
                <div class="row">
                    <div id="Monday" class="col">
                        <div id="Title">
                            <h1> Monday </h1>
                        </div>
                        <div id="todo">
                            <ul id="list">
                                <li id="element"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </li>
                            </ul>
                        </div>
                        <div id="button">
                            <button type="submit" id="add" onclick="addToListPress(event)"> Add To List </button>
                        </div>
                    </div>
                    <div id="Tuesday" class="col">
                        <div id="Title">
                            <h1> Tuesday </h1>
                        </div>
                        <div id="todo">
                            <ul id="list"> </ul>
                        </div>
                        <div id="button">
                            <button type="submit" id="add" onclick="addToListPress(event)"> Add To List </button>
                        </div>
                    </div>
                    <div id="Wednesday" class="col">
                        <div id="Title">
                            <h1> Wednesday </h1>
                        </div>
                        <div id="todo">
                            <ul id="list"> </ul>
                        </div>
                        <div id="button">
                            <button type="submit" id="add" onclick="addToListPress(event)"> Add To List </button>
                        </div>
                    </div>
                    <div id="Thursday" class="col">
                        <div id="Title">
                            <h1> Thursday </h1>
                        </div>
                        <div id="todo">
                            <ul id="list"> </ul>
                        </div>
                        <div id="button">
                            <button type="submit" id="add" onclick="addToListPress(event)"> Add To List </button>
                        </div>
                    </div>
                    <div id="Friday" class="col">
                        <div id="Title">
                            <h1> Friday </h1>
                        </div>
                        <div id="todo">
                            <ul id="list"> </ul>
                        </div>
                        <div id="button">
                            <button type="submit" id="add" onclick="addToListPress(event)"> Add To List </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Account-Side" class="split right">
                <div id="Buttons" class="container">
                    <div class="col">
                        <div id="Logins" class="row">
                            <button type="submit" id="login" onclick="login(event)"> Login </button>
                            <button type="submit" id="signup" onclick="signUp(event)"> Sign Up </button>
                        </div>
                        <br>
                        <div id="Theme" class="row">
                            <button type="submit" id="theme" onclick="themeSelect(event)"> Theme Select </button>
                        </div>
                    </div>
                </div>
            </div>`;
};

/* Handle Add To List Button Press */
export const addToListPress = function (event) {
    alert("Add to List was clicked");
};

/* Handle Login Button Press */
export const login = function (event) {
    alert("Login Button was clicked");
};

/* Handle Sign Up Button Press */
export const signUp = function (event) {
    alert("Sign Up Button was clicked");
};

/* Handle Theme Selector Press */
export const themeSelect = function (event) {
    alert("Theme Select Button was clicked");
};

/* Render All */
export const loadAll = function () {
    const $screen = $('#screen');

    $screen.append(loadBoard());

    $("#screen").on("click", "#add", addToListPress);
    $("#screen").on("click", "#login", login);
    $("#screen").on("click", "#signup", signUp);
    $("#screen").on("click", "#theme", themeSelect);
};

/* Execute loadAll */
$(function () {
    loadAll();
});