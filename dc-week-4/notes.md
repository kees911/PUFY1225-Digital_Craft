**Markdown Cheatsheet for GitHub:** https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Parameters= variables you can pass through the f'n
Variables can usually only be used by the f'n they're contained in
Global variables can be set outside and applied anywhere.

Blueprints

**transformations in p5.js:**
* translate: https://p5js.org/reference/#/p5/translate
> push(); pop();
* scale: https://p5js.org/reference/#/p5/scale
* rotate: https://p5js.org/reference/#/p5/rotate

* function myFunction (x,y,angle,itemWidth,itemHeight,r,g,b,a){}

**creating organic shapes by placing vertices**
* samples: https://p5js.org/reference/#/p5/beginShape
```javascript
beginShape();
vertex(0,0);
vertex (100, 100);
vertex (0,100);
vertex (100,0);
endShape();
```
**Using strings to build variables**
```javascript
var color = '"' + rColor + ',' + gColor + ',' + bColor + '"';
print (color)
//this didn't work in context, but something like this
```
