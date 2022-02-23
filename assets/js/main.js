// lev 2_7

let counter = -1;
let container = document.getElementsByClassName("umwickeln")[0];
let button = document.querySelector("button");
let duration = 200;

button.addEventListener("click", () => {

    let timer = setInterval(function () {
        counter++;

        let wrapper = document.createElement("div");
        wrapper.textContent = counter;


        if (counter > 100) {
            clearInterval(timer);
        }
        else {
            if (counter % 10 === 0) {
                wrapper.className = "weiss";
            }
            else {
                wrapper.className = "rechteck";
            }
            container.appendChild(wrapper);
        }

    }, duration)
})
