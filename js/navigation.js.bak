window.addEventListener("block-loaded-home-header-logged-in-team", () => {
  setTimeout(() => {
    // Notifications
    //console.log('Header loaded');
    const notifications = document
      .getElementById("notification-bell")
      .closest("a");
    notifications.addEventListener("click", function (e) {
      //console.log("Click happened for: " + e.target.id);
      e.preventDefault();
    });

    // Menu Sidebar
    // Define the HTML content to be inserted
    let menu = `<button class="navbar-toggler hamburger-icon" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg></span></button>`;

    // Insert the HTML content into the navbar header as the last child
    const headerContainerDiv = document.querySelector(
      "header > .container > div"
    );
    headerContainerDiv.insertAdjacentHTML("afterbegin", menu);

    const headerNavbarBrand = document.querySelector("header .navbar-brand");
    const sidebar = document.querySelector(".sidebar");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const contentOverlay = document.querySelector(".content-overlay");

    function toggleSidebar() {
      sidebar.classList.toggle("open");
      contentOverlay.classList.toggle("open");
      headerNavbarBrand.classList.toggle("invisible");
    }

    if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", toggleSidebar);

      if (contentOverlay) {
        contentOverlay.addEventListener("click", toggleSidebar);
      }
    }

    // Search Bar
    const search = document.querySelector(".search");

    if (navigator.userAgent.indexOf("Mac") !== -1) {
      document.querySelector(".ua-mac").style.display = "inline";
    } else {
      document.querySelector(".ua-win").style.display = "inline";
    }

    document.addEventListener("keydown", function (event) {
      if (event.metaKey && event.which === 75) {
        document.querySelector(".search").parentNode.click();
        event.preventDefault();
      } else if (event.metaKey && event.which === 27) {
        document.querySelector(".sw-modal-close").click();
      }
    });
    // Notifications
    (function (n, o, t, i, f) {
      n[i] = {};
      var m = ["init", "on"];
      n[i]._c = [];
      m.forEach(
        (me) =>
          (n[i][me] = function () {
            n[i]._c.push([me, arguments]);
          })
      );
      var elt = o.createElement(f);
      elt.type = "text/javascript";
      elt.async = true;
      elt.src = t;
      var before = o.getElementsByTagName(f)[0];
      before.parentNode.insertBefore(elt, before);
    })(
      window,
      document,
      "https://embed.novu.co/embed.umd.min.js",
      "novu",
      "script"
    );

    novu.init(
      "bDCEcX9acD0k",
      {
        unseenBadgeSelector: "#unseen-badge",
        bellSelector: "#notification-bell",
        position: {
          top: "45px",
        },
      },
      {
        subscriberId: window.logged_in_user["record_id"],
        email: window.logged_in_user["Email"],
        firstName: window.logged_in_user["First Name"],
        lastName: window.logged_in_user["Last Name"],
      }
    );
  }, 1300);
});
