// DOM elements
const guideList = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${user.email}</div>
        <div>Your username is: ${doc.data().display}</div>
        <div>Your main task for the week is: ${doc.data().task}</div>
        <div>Your bio is: ${doc.data().bio}</div>
        
        
      `;
      accountDetails.innerHTML = html;
    });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup guides
const setupGuides = (data) => {
 


  if (data) {
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
          <div class="collapsible-body white"> ${guide.content}  </div>
          
          <!--
          <button id="myBtn">Delete ${guide.title} To-Do List</button>
          -->


          <!--
        <div class="collapsible-header grey lighten-4"> ${guide.features} </div>
        <div class="collapsible-body white"> ${guide.featurescontent} </div>
        -->


        
        </li>
      `;
     
      html += li;
    });
    guideList.innerHTML = html;


    db.collection('guides').onSnapshot(snapshot => {
      
      
      document.getElementById("myBtn").addEventListener('click', (e) => {
       
        if (snapshot.docs[0].id) {
          for (i = 0; i < snapshot.docs.length; i++) {
            db.collection("guides").doc(snapshot.docs[i].id).delete();
          }
         
        }
        
      
      })

    });
  
    
    
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