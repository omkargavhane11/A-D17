const countdown = document.querySelector("#countdown");
let timer = 10;

countdown.innerHTML = timer--;

setTimeout(() => {
    countdown.innerHTML = timer--;
    setTimeout(() => {
        countdown.innerHTML = timer--;
        setTimeout(() => {
            countdown.innerHTML = timer--;
            setTimeout(() => {
                countdown.innerHTML = timer--;
                setTimeout(() => {
                    countdown.innerHTML = timer--;
                    setTimeout(() => {
                        countdown.innerHTML = timer--;
                        setTimeout(() => {
                            countdown.innerHTML = timer--;
                            setTimeout(() => {
                                countdown.innerHTML = timer--;
                                setTimeout(() => {
                                    countdown.innerHTML = timer--;
                                    setTimeout(() => {
                                        countdown.innerHTML = "Happy Independance Day";
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)