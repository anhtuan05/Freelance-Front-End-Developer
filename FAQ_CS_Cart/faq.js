document.addEventListener("DOMContentLoaded", function () {
    const t585Contents = document.querySelectorAll(".t585__content");
    const t585Icons = document.querySelectorAll(".t585__icon");
    const t585Btn = document.querySelectorAll(".t585__trigger-button");

    for (let i = 0; i < t585Btn.length; i++) { 
        t585Btn[i].addEventListener("click", function () {
            const contentWrapper = t585Contents[i].querySelector(".t585__textwrapper");
            const icon = t585Icons[i]; 

            if (t585Contents[i].style.maxHeight) {
                t585Contents[i].style.maxHeight = null;
                icon.classList.remove("rotate"); 
            } else {
                t585Contents[i].style.maxHeight = contentWrapper.scrollHeight + "px";
                icon.classList.add("rotate"); 
            }
        });
    }
});
