const find_url = () => {
    const inputvalue = document.querySelector(".input_block").value;
    if (inputvalue.trim().length != 0) {
        document.getElementById("frame").src=inputvalue; 
        document.querySelector(".input_block").value = "";
    } else return;

}

document.querySelector(".button").addEventListener("click", (e) => {
    find_url();
})
