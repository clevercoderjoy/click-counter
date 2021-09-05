// setting initial count value
let count = 0;

// selecting the values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles =e.currentTarget.classList;

        // targeting count

        if(styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else if(styles.contains('increase')){
            count ++;
        }

        // styling color
        
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color ="black";
        }
        value.innerText = count;
    });
});