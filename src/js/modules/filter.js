const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector(".portfolio-no");
  

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  const addEventClick = (btn, mark) => {
    btn.addEventListener("click", () => {
      typeFilter(mark);
    });
  };

  addEventClick(menu.querySelector(".all"), wrapper.querySelectorAll(".all"));
  addEventClick(
    menu.querySelector(".lovers"),
    wrapper.querySelectorAll(".lovers")
  );
  addEventClick(menu.querySelector(".chef"), wrapper.querySelectorAll(".chef"));
  addEventClick(menu.querySelector(".girl"), wrapper.querySelectorAll(".girl"));
  addEventClick(menu.querySelector(".guy"), wrapper.querySelectorAll(".guy"));
  addEventClick(menu.querySelector(".grandmother"));
  addEventClick(menu.querySelector(".granddad"));

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

};

export default filter;