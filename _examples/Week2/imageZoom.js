class ImageZoom {

    constructor(selector) {
        this.zoomLevel = 1;
        this.container = document.querySelector(selector);
        this.image = this.container.querySelector(".image");
        this.container.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.container.addEventListener("click", this.onClick.bind(this));
    }

    onClick(event) {
        this.zoomLevel ++;
        this.image.style.transform = "scale("+this.zoomLevel+")";

        if(this.zoomLevel >= 3) {
            this.zoomLevel = 0;
        }
    }

    onMouseMove(event) {
        this.image.style.left = (event.pageX - event.target.offsetLeft)+"px";
        this.image.style.top = (event.pageY - event.target.offsetTop)+"px";
    }
}

