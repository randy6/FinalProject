/* This is where the functionality will take place. */

/* Render the Board */
export const loadBoard = function () {
    return `<div id="Planner-Side" class="split left">
                <div id="Days-Of-Week" class="container">
                    <div class="row">
                        <div id="Sunday" class="col">
                            <h1> Sunday </h1>
                        </div>
                        <div id="Monday" class="col">
                            <h1> Monday </h1>
                        </div>
                        <div id="Tuesday" class="col">
                            <h1> Tuesday </h1>
                        </div>
                        <div id="Wednesday" class="col">
                            <h1> Wednesday </h1>
                        </div>
                        <div id="Thursday" class="col">
                            <h1> Thursday </h1>
                        </div>
                        <div id="Friday" class="col">
                            <h1> Friday </h1>
                        </div>
                        <div id="Saturday" class="col">
                            <h1> Saturday </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Account-Side" class="split right">
                <div id="Buttons" class="container">
                    <div class="col">
                        <div id="Logins" class="row">
                            <h1> Login Button </h1>
                        </div>
                        <div id="Theme" class="row">
                            <h1> Theme Button </h1>
                        </div>
                    </div>
                </div>
            </div>`;
};

/* Render All */
export const loadAll = function () {
    const $screen = $('#screen');

    $screen.append(loadBoard());
};

/* Execute loadAll */
$(function () {
    loadAll();
});