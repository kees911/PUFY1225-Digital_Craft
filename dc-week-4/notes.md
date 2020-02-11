Parameters= variables you can pass through the f'n
Variables can usually only be used by the f'n they're contained in
Global variables can be set outside and applied anywhere.

Blueprints

**transformations in p5.js:**
* translate: https://p5js.org/reference/#/p5/translate
> push(); pop();
* scale: https://p5js.org/reference/#/p5/scale
* rotate: https://p5js.org/reference/#/p5/rotate

* function myFunction (x,y,angle,itemWidth,itemHeight){}

**creating organic shapes by placing vertices**
beginShape();
vertex(0,0);
vertex (100, 100);
vertex (0,100);
vertex (100,0);
endShape();
