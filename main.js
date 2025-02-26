
function paint_stars(){
    let canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect()
    let dpr = window.devicePixelRatio
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;


    if(!canvas){
        ReferenceError; 
        return;
    }

    let ctx = canvas.getContext('2d');
    ctx.scale(dpr/2, dpr)
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for(let i=0; i<100; i++){
        let radius = Math.random() 
        let x_coord = Math.floor(Math.random() *  canvas.width)
        let y_coord =  Math.floor(Math.random() *  canvas.height)

        let star = new Star(x_coord, y_coord, radius);
        star.create_star();
    }
}

paint_stars();