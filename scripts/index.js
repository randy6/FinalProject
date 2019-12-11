// DOM elements
const guideList = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup guides
const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>

        <!--
        <h5 style="color:green;" class="center-align">You are logged in!</h5>
        <p class="center-align">You can now view the information and full access planner below.</p>
        -->

          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>

          <!--
        <div class="collapsible-header grey lighten-4"> ${guide.features} </div>
        <div class="collapsible-body white"> ${guide.featurescontent} </div>
        -->


          <button onclick="window.location.href='/fullplanner.html'">Create ${guide.title} Weekly Planner</button>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    
    guideList.innerHTML = '<h5 style="color:red;" class="center-align"> You are currently logged out </h5><br><h5 class="center-align"> Sign up or Login to access all features </h5> <br> <p class="center-align">If you do not want to sign in, you can use the restricted access guest planner at the top left. </p><br>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});