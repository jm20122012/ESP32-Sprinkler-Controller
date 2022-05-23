const Http = new XMLHttpRequest();
var slider_1 = document.getElementById("toggle_1");
var slider_2 = document.getElementById("toggle_2");
var slider_1_current;
var slider_2_current;

slider_1.oninput = function(){
    console.log("Slider 1");
    console.log("Slider 1 value: " + this.value);
    if (this.value == "on"){
        console.log("Slider is " + this.value);
        console.log("Change to off");
        this.value = "off";
    }
    else if (this.value == "off"){
        console.log("Slider is " + this.value);
        console.log("Changing to on")
        this.value = "on";
    }
    slider_1_current = this.value;
    Http.open('POST', '/toggle_test')
    Http.send(slider_1_current)
    console.log("Slider 1 value after post: " + this.value);
}