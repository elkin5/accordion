// Add your javascript here
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");

    const accordionSections = document.querySelectorAll(".accordion");
    const multiSelect = document.getElementById("checkbox");
    const firstAccordion = document.querySelector(".accordion");

    firstAccordion.classList.toggle("active");

    accordionSections.forEach((section) => {
        const expand = section.querySelector(".expand-icon");
        const colapse = section.querySelector(".collapse-icon");
        const content = section.querySelector(".description");
        const title = section.querySelector(".title");

        title.addEventListener("click", () => {
            section.classList.toggle("active");

            if (section.classList.contains("active")) {
                content.style.display = "block";
                expand.style.display = "none";
                colapse.style.display = "block";
            } else {
                content.style.display = "none";
                expand.style.display = "block";
                colapse.style.display = "none";
            }
        });

        expand.addEventListener("click", () => {
            section.classList.toggle("active");

            if (!multiSelect.checked) {
                section.classList.contains("active")

                accordionSections.forEach((otherSection) => {
                    if (otherSection !== section) {
                      otherSection.classList.remove('active');
                      otherSection.querySelector('.description').style.display = 'none';
                      otherSection.querySelector('.expand-icon').style.display = 'block';
                      otherSection.querySelector('.collapse-icon').style.display = 'none';
                    }
                  });
            }
        });

        if (section.classList.contains("active")) {
            content.style.display = "block";
            expand.style.display = "none";
            colapse.style.display = "block";
        } else {
            content.style.display = "none";
            expand.style.display = "block";
            colapse.style.display = "none";
        }
    });
});
