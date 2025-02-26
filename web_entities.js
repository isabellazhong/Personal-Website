class Button{
    constructor(id_elem, link){
        this.id_elem = id_elem;
        this.link = link;
    }

    assign_link(self){
        html_btn = document.getElementById(this.id_elem)
        if(self.link){
            html_btn.link = this.link;
        }else{
            ReferenceError;
        }
    } 
}

class Star{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius
    }

    create_star(){
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext("2d")

        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fillStyle = "white";
        ctx.fill() 
    }
}


class ImageCarousel{
    
}

class Page{

    Y_MARGIN = 40
    LINE_Y_MARGIN = 15 

    constructor(title, description, image){
        this.title = title
        this.description = description
        this.image = image
    }

    add_image(img){
        
        this.image.append(img)
    }


}


