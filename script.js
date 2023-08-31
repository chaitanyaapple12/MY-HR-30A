
var transactionsText = document.getElementById("transactionsText");
if (transactionsText) {
  transactionsText.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var employeeText = document.getElementById("employeeText");
if (employeeText) {
  employeeText.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var notificationBing51 = document.getElementById("notificationBing51");
if (notificationBing51) {
  notificationBing51.addEventListener("click", function () {
    var popup = document.getElementById("notificationsContainer");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}

var nameContainer = document.getElementById("nameContainer");
if (nameContainer) {
  nameContainer.addEventListener("click", function () {
    var popup = document.getElementById("drawerProfileContainer");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}

var totalBalanceContainer1 = document.getElementById("totalBalanceContainer1");
if (totalBalanceContainer1) {
  totalBalanceContainer1.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer3 = document.getElementById("totalBalanceContainer3");
if (totalBalanceContainer3) {
  totalBalanceContainer3.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer5 = document.getElementById("totalBalanceContainer5");
if (totalBalanceContainer5) {
  totalBalanceContainer5.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer7 = document.getElementById("totalBalanceContainer7");
if (totalBalanceContainer7) {
  totalBalanceContainer7.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer9 = document.getElementById("totalBalanceContainer9");
if (totalBalanceContainer9) {
  totalBalanceContainer9.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer11 = document.getElementById(
  "totalBalanceContainer11"
);
if (totalBalanceContainer11) {
  totalBalanceContainer11.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer13 = document.getElementById(
  "totalBalanceContainer13"
);
if (totalBalanceContainer13) {
  totalBalanceContainer13.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}

var totalBalanceContainer15 = document.getElementById(
  "totalBalanceContainer15"
);
if (totalBalanceContainer15) {
  totalBalanceContainer15.addEventListener("click", function (e) {
    window.location.href = "./error-page.html";
  });
}
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
 

    const toggleButton = document.getElementById('toggle-notifications');
    const notificationList = document.querySelector('.notification-list');

    toggleButton.addEventListener('click', () => {
      notificationList.classList.toggle('show');
    });
    const changePictureLink = document.getElementById('change-picture-link');
    const changePictureOption = document.getElementById('change-picture-option');
    
    changePictureLink.addEventListener('click', () => {
      changePictureOption.style.display = 'block';
    });


    document.getElementById('uploadButton').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

    document.getElementById('updateButton').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const profilePicture = document.getElementById('profilePicture');
                profilePicture.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });
    

    // -----------Animation Page 404 -----------

    var frameContainer1 = document.getElementById("frameContainer1");
    if (frameContainer1) {
      frameContainer1.addEventListener("click", function (e) {
        window.location.href = "./full-responsive-functionality.html";
      });
    }
    var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
    var observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }
  




    // ------------------login-----------------
    document.getElementById("login-btn").addEventListener("click", function() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
    
      // You can add authentication logic here
      // For this example, let's assume the credentials are "admin" and "password"
      if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to the HR dashboard or another page
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
    