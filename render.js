/* This is where the functionality will take place. */

/* Render the Board */
export const loadBoard = function () {
    return `<div id="Planner-Side" class="split left">
                <div id="Days-Of-Week" class="container">
                    <div class="row">
                        <div id="Monday" class="col">
                            <div id="Title">
                                <h1> Monday </h1>
                            </div>
                            <div id="todo">

                            </div>
                            <div id="button">
                                <button type="button" id="edit"> Edit </button>
                            </div>
                        </div>
                        <div id="Tuesday" class="col">
                            <div id="Title">
                                <h1> Tuesday </h1>
                            </div>
                            <div id="todo">

                            </div>
                            <div id="button">
                                <button type="button" id="edit"> Edit </button>
                            </div>
                        </div>
                        <div id="Wednesday" class="col">
                            <div id="Title">
                                <h1> Wednesday </h1>
                            </div>
                            <div id="todo">

                            </div>
                            <div id="button">
                                <button type="button" id="edit"> Edit </button>
                            </div>
                        </div>
                        <div id="Thursday" class="col">
                            <div id="Title">
                                <h1> Thursday </h1>
                            </div>
                            <div id="todo">

                            </div>
                            <div id="button">
                                <button type="button" id="edit"> Edit </button>
                            </div>
                        </div>
                        <div id="Friday" class="col">
                            <div id="Title">
                                <h1> Friday </h1>
                            </div>
                            <div id="todo">

                            </div>
                            <div id="button">
                                <button type="button" id="edit"> Edit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Account-Side" class="split right">
                <div id="Buttons" class="container">
                    <div class="col">
                        <div id="Logins" class="row">
                            <button type="button"> Login </button>
                            <button type="button"> Sign Up </button>
                        </div>
                        <br>
                        <div id="Theme" class="row">
                            <button type="button"> Theme Select </button>
                        </div>
                    </div>
                </div>
            </div>`;
};

/* Handle Edit Button Press */

/* Handle Save Button Press */

/* Handle Cancel Button Press */

/* Render All */
export const loadAll = function () {
    const $screen = $('#screen');

    $screen.append(loadBoard());
};

/* Execute loadAll */
$(function () {
    loadAll();
});