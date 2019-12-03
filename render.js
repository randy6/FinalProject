/* This is where the functionality will take place. */

/* Render the Board */
export const loadBoard = function () {
    return `<div class="container">
                <div class="row">
                    <div id="Planner" class="col">
                        <div>
                            <h1> Test </h1>
                        </div>
                    </div>
                    <div id="Accounts" class="col">
                        <div>
                            <h1> Test2 </h2>
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