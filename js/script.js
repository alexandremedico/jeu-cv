"use strict";

window.onload = function(){
    var masque = window.document.getElementById('container');
    var sprite = window.document.getElementById('contenu');
    var sprite2 = window.document.getElementById('contenu2');

    // case
    var masque2 = window.document.getElementById('container2');
    var sprite3 = window.document.getElementById('contenu3');

    var masque3 = window.document.getElementById('container3');
    var sprite4 = window.document.getElementById('contenu4');

    var masque4 = window.document.getElementById('container4');
    var sprite5 = window.document.getElementById('contenu5');

    var masque5 = window.document.getElementById('container5');
    var sprite6 = window.document.getElementById('contenu6');

    var masque6 = window.document.getElementById('container6');
    var sprite7 = window.document.getElementById('contenu7');

    var masque7 = window.document.getElementById('container7');
    var sprite8 = window.document.getElementById('contenu8');

    var masque8 = window.document.getElementById('container8');
    var sprite9 = window.document.getElementById('contenu9');

    var masque9 = window.document.getElementById('container9');
    var sprite10 = window.document.getElementById('contenu10');

    var masque10 = window.document.getElementById('container10');
    var sprite11 = window.document.getElementById('contenu11');

    var masque11 = window.document.getElementById('container11');
    var sprite12 = window.document.getElementById('contenu12');

    var masque12 = window.document.getElementById('container12');
    var sprite13 = window.document.getElementById('contenu13');

    var masque13 = window.document.getElementById('container13');
    var sprite14 = window.document.getElementById('contenu14');

    var masque14 = window.document.getElementById('container14');
    var sprite15 = window.document.getElementById('contenu15');

    var masquePiece1 = window.document.getElementById('containerPiece1');
    var spritePiece1 = window.document.getElementById('spritePiece1');


    // goomba
    // var goombaLeft = window.document.body.children[0].children[1].style.left;
    // if ('' === goombaLeft){
    //   goombaLeft = '400px';
    //   window.document.body.children[0].children[1].style.left = goombaLeft;
    // }

    var masqueGoomba =  window.document.getElementById('containerGoomba');
    var goomba = window.document.getElementById('goomba');

    // var goombaLeft2 = window.document.body.children[0].children[2].style.left;
    // if ('' === goombaLeft2){
    //   goombaLeft2 = '580px';
    //   window.document.body.children[0].children[2].style.left = goombaLeft2;
    // }
    
    // var masqueGoomba2 =  window.document.getElementById('containerGoomba2');
    // var goomba2 = window.document.getElementById('goomba2');

    var deplacementGoomba = {
      goombaX: [{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-16px',
          leftDeImage: '0px'
      },{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-16px',
          leftDeImage: '-16px'
      }]
    }

    var droite = window.document.body.children[0].children[0].style.left;
    var y = 0;
    var z = 0;

      // if (droite == "") {
      //   var intervalDeplacement = setInterval(function(abcd) {
      //     masqueGoomba.style.width = deplacementGoomba.goombaX[0].largeurMasque;
      //     masqueGoomba.style.height = deplacementGoomba.goombaX[0].hauteurMasque;
      //     goomba.style.top = deplacementGoomba.goombaX[0].topDeImage;
      //     goomba.style.left = deplacementGoomba.goombaX[z++].leftDeImage;
    
      //     if (z == 2) {
      //       z = 0;
      //     }
          
      //     goombaLeft = parseFloat(goombaLeft) - 5;
      //     window.document.body.children[0].children[1].style.left = goombaLeft + 'px';
        
      //     if (parseFloat(window.document.body.children[0].children[1].style.left) == (parseFloat(window.document.body.children[0].children[0].children[0].style.left) + 15)) {
      //       console.log('je suis mort');
      //       window.document.body.children[0].children[0].children[0].className = "masque tomberGoomba";
      //       setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
      //       window.document.body.children[0].children[0].children[0].className = "masque tomberGoomba mortGoomba";
      //       setTimeout(function(){alert('Vous êtes mort !');
      //       window.document.body.children[0].children[0].children[0].style.left = "200px";
      //       window.document.body.children[0].children[0].children[0].style.top = "412px";
      //       window.document.body.children[0].children[0].style.left = "0px";
      //       sprite.style.left = decompositionDuSprite.perso[0].leftDeImage;
      //       window.document.body.children[0].children[0].children[0].className = "masque";
      //       clearInterval(intervalDeplacement);
      //       window.document.body.children[0].children[1].style.left = "400px";
      //       document.location.reload();}
      //       , 1500);
      //     }
    
      //     if (parseFloat(window.document.body.children[0].children[0].style.left) <= 0) {
      //       clearInterval(intervalDeplacement);
      //     }
  
      //     if (parseFloat(window.document.body.children[0].children[0].style.left) < 0) {
      //       var intervalDeplacement2 = setInterval(function() {
      //         masqueGoomba.style.width = deplacementGoomba.goombaX[0].largeurMasque;
      //         masqueGoomba.style.height = deplacementGoomba.goombaX[0].hauteurMasque;
      //         goomba.style.top = deplacementGoomba.goombaX[0].topDeImage;
      //         goomba.style.left = deplacementGoomba.goombaX[z++].leftDeImage;
        
      //         if (z == 2) {
      //           z = 0;
      //         }
      
      //         goombaLeft = parseFloat(goombaLeft) - 100;
      //         window.document.body.children[0].children[1].style.left = goombaLeft + 'px';
      
      //         if (parseFloat(window.document.body.children[0].children[1].style.left) <= -20) {
      //           clearInterval(intervalDeplacement);
      //           window.document.body.children[0].children[1].style.display = "none";
      //         }
      //         if (parseFloat(window.document.body.children[0].children[1].style.left) <= -20) {
      //           clearInterval(intervalDeplacement2);
      //           window.document.body.children[0].children[1].style.display = "none";
      //         }
      //       }, 300);
      //     }
      //   },300);
      // }
    


    // window.document.body.children[0].children[2].style.display = "none";
    // var intervalDeplacement3 = setInterval(function() {
    //   if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) >= 1300) {
    //     window.document.body.children[0].children[2].style.display = "block";
    //     console.log("je suis la");
    //     masqueGoomba2.style.width = deplacementGoomba.goombaX[0].largeurMasque;
    //     masqueGoomba2.style.height = deplacementGoomba.goombaX[0].hauteurMasque;
    //     goomba2.style.top = deplacementGoomba.goombaX[0].topDeImage;
    //     goomba2.style.left = deplacementGoomba.goombaX[y++].leftDeImage;
  
    //     if (y == 2) {
    //       y = 0;
    //     }
  
    //     if (parseFloat(window.document.body.children[0].children[0].style.left) >= -850 && (parseFloat(window.document.body.children[0].children[0].style.left) <= -1050)) {
    //       goombaLeft2 = parseFloat(goombaLeft2) + 5;
    //       window.document.body.children[0].children[2].style.left = goombaLeft2 + 'px';
    //     } 
        
    //     if (parseFloat(window.document.body.children[0].children[0].style.left) >= -1050){
    //       clearInterval(intervalDeplacement3);
    //         var intervalDeplacement4 = setInterval(function () {
    //         window.document.body.children[0].children[2].style.display = "block";
    //         console.log("je suis la");
    //         masqueGoomba2.style.width = deplacementGoomba.goombaX[0].largeurMasque;
    //         masqueGoomba2.style.height = deplacementGoomba.goombaX[0].hauteurMasque;
    //         goomba2.style.top = deplacementGoomba.goombaX[0].topDeImage;
    //         goomba2.style.left = deplacementGoomba.goombaX[y++].leftDeImage;
      
    //         if (y == 2) {
    //           y = 0;
    //         }

    //         goombaLeft2 = parseFloat(goombaLeft2) - 5;
    //         window.document.body.children[0].children[2].style.left = goombaLeft2 + 'px';

    //         if (parseFloat(window.document.body.children[0].children[0].style.left) >= -800) {
    //           clearInterval(intervalDeplacement4);
    //           window.document.body.children[0].children[2].style.display = "none";
    //         }
    //       }, 300);
    //     }
    //   }
    // },300);
    


    // tableau pour les sprites
    var decompositionDuSprite = {
    perso: [{
            largeurMasque: '16px',
            hauteurMasque: '16px',
            topDeImage: '-34px',
            leftDeImage: '-81px'
          },{
            largeurMasque: '16px',
            hauteurMasque: '16px',
            topDeImage: '-34px',
            leftDeImage: '-98px'
          },{
            largeurMasque: '16px',
            hauteurMasque: '16px',
            topDeImage: '-34px',
            leftDeImage: '-114px'
          },{
            largeurMasque: '16px',
            hauteurMasque: '16px',
            topDeImage: '-34px',
            leftDeImage: '-128px'
          },{
            largeurMasque: '16px',
            hauteurMasque: '16px',
            topDeImage: '-34px',
            leftDeImage: '-146px'
          }
        ]
      };
  var decompositionALenvers = {
      perso: [{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-34px',
          leftDeImage: '-81px'
        },{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-34px',
          leftDeImage: '-98px'
        },{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-34px',
          leftDeImage: '-114px'
        },{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-34px',
          leftDeImage: '-131px'
        },{
          largeurMasque: '16px',
          hauteurMasque: '16px',
          topDeImage: '-34px',
          leftDeImage: '-146px'
        }
      ]
    };

    var saut = {
      perso: [{
        largeurMasque: '16px',
        hauteurMasque: '16px',
        topDeImage: '-34px',
        leftDeImage: '-162px'
        },{
        largeurMasque: '16px',
        hauteurMasque: '16px',
        topDeImage: '-34px',
        leftDeImage: '-162px'
        }
      ]
    };

    var positionBloc = {
      bloc: [{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '569px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '712px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '748px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '782px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '143px',
          left: '783px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '820px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '854px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '2747px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '3354px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '3568px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '3783px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '3889px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '3997px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '4211px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '4604px'
        },{
          largeur: '34px',
          hauteur: '34px',
          top: '286px',
          left: '5997px'
        }
      ]
    }

    var positionTuyau = {
        tuyau :[{
          largeur: '70px',
          hauteur: '70px',
          top: '358px',
          left: '998px'
        },{
          largeur: '70px',
          hauteur: '106px',
          top: '322px',
          left: '1354px'
        },{
          largeur: '70px',
          hauteur: '142px',
          top: '286px',
          left: '1640px'
        },{
          largeur: '70px',
          hauteur: '142px',
          top: '286px',
          left: '2020px'
        },{
          largeur: '70px',
          hauteur: '70px',
          top: '358px',
          left: '5818px'
        },{
          largeur: '70px',
          hauteur: '70px',
          top: '358px',
          left: '6388px'
        }
      ]
    };

    var mort = {
     perso : [{
      largeurMasque: '16px',
      hauteurMasque: '16px',
      topDeImage: '-34px',
      leftDeImage: '-178px'
      }]
    };

    var piece = {
      case : [{
        largeurMasque: '32px',
        hauteurMasque: '32px',
        topDeImage: '-2px',
        leftDeImage: '-840px'
      },{
        largeurMasque: '32px',
        hauteurMasque: '32px',
        topDeImage: '-2px',
        leftDeImage: '-875px'
      },{
        largeurMasque: '32px',
        hauteurMasque: '32px',
        topDeImage: '-2px',
        leftDeImage: '-910px'
      }]
    }

    var vide = {
      case : [{
        largeurMasque: '32px',
        hauteurMasque: '32px',
        topDeImage: '-2px',
        leftDeImage: '-946px'
      }]
    }

    var piece1 = {
      case : [{
        largeurMasque: '32px',
        hauteurMasque: '32px',
        topDeImage: '216px',
        leftDeImage: '-89px'
      }]
    }

    // variable
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var t = 0;
    var u = 0;
    var v = 0;
    var bool = true;
    var sauter = true;
    var sautBloc = true;
    var point = window.document.getElementById('point'); 
    var score = 0; 
    var uneFois = true;
    var deuxFois = true;
    var troisFois = true;
    var quatreFois = true;
    var inc = true;
    var inc1 = true;
    var inc2 = true;
    var inc3 = true;
    var inc4 = true;
    var limiteSaut = '230px';
    var carre1 = true;
    var carre2 = true;
    var carre3 = true;
    var carre4 = true;
    var carre5 = true;
    var carre6 = true;
    var carre7 = true;
    var carre8 = true;
    var carre9 = true;
    var alert1 = true;
    var alert2 = true;
    var alert3 = true;
    var alert4 = true;
    var alert5 = true;
    var alert6 = true;
    var alert7 = true;
    var alert8 = true;
    var alert9 = true;
    var alert10 = true;

    
    // animation case
    var interval1 = setInterval(function(){ 
      masque2.style.width = piece.case[0].largeurMasque;
      masque2.style.height = piece.case[0].hauteurMasque;
      sprite3.style.top = piece.case[0].topDeImage;
      sprite3.style.left = piece.case[j++].leftDeImage; 

      if (j == 3) {
        j = 0;
      }
    }, 200);

    var interval2 = setInterval(function () {
      
      masque3.style.width = piece.case[0].largeurMasque;
      masque3.style.height = piece.case[0].hauteurMasque;
      sprite4.style.top = piece.case[0].topDeImage;
      sprite4.style.left = piece.case[k++].leftDeImage;

      if (k == 3) {
        k = 0;
      }
    },200);

    var interval3 = setInterval(function ()  {
      masque4.style.width = piece.case[0].largeurMasque;
      masque4.style.height = piece.case[0].hauteurMasque;
      sprite5.style.top = piece.case[0].topDeImage;
      sprite5.style.left = piece.case[l++].leftDeImage;

      if (l == 3) {
        l = 0;
      }
    }, 200);

    var interval4 = setInterval(function() {
      masque5.style.width = piece.case[0].largeurMasque;
      masque5.style.height = piece.case[0].hauteurMasque;
      sprite6.style.top = piece.case[0].topDeImage;
      sprite6.style.left = piece.case[m++].leftDeImage;

      if (m == 3) {
        m = 0;
      }
    }, 200);

    var interval5 = setInterval(function() {
      masque6.style.width = piece.case[0].largeurMasque;
      masque6.style.height = piece.case[0].hauteurMasque;
      sprite7.style.top = piece.case[0].topDeImage;
      sprite7.style.left = piece.case[n++].leftDeImage;
      
      if (n == 3) {
        n = 0;
      }
    }, 200);

    var interval6 = setInterval(function() {
      masque7.style.width = piece.case[0].largeurMasque;
      masque7.style.height = piece.case[0].hauteurMasque;
      sprite8.style.top = piece.case[0].topDeImage;
      sprite8.style.left = piece.case[o++].leftDeImage;
      
      if (o == 3) {
        o = 0;
      }
    }, 200);

    var interval7 = setInterval(function() {
      masque8.style.width = piece.case[0].largeurMasque;
      masque8.style.height = piece.case[0].hauteurMasque;
      sprite9.style.top = piece.case[0].topDeImage;
      sprite9.style.left = piece.case[p++].leftDeImage;
      
      if (p == 3) {
        p = 0;
      }
    }, 200);
      
    var interval8 = setInterval(function() {
      masque9.style.width = piece.case[0].largeurMasque;
      masque9.style.height = piece.case[0].hauteurMasque;
      sprite10.style.top = piece.case[0].topDeImage;
      sprite10.style.left = piece.case[q++].leftDeImage;

      if (q == 3) {
        q = 0;
      }
    }, 200);
      
    var interval9 = setInterval(function() {
      masque10.style.width = piece.case[0].largeurMasque;
      masque10.style.height = piece.case[0].hauteurMasque;
      sprite11.style.top = piece.case[0].topDeImage;
      sprite11.style.left = piece.case[r++].leftDeImage;

      if (r == 3) {
        r = 0;
      }
    }, 200);

    var interval10 = setInterval(function() {
      masque11.style.width = piece.case[0].largeurMasque;
      masque11.style.height = piece.case[0].hauteurMasque;
      sprite12.style.top = piece.case[0].topDeImage;
      sprite12.style.left = piece.case[s++].leftDeImage;

      if (s == 3) {
        s = 0;
      }
    }, 200);      

    var interval11 = setInterval(function() {
      masque12.style.width = piece.case[0].largeurMasque;
      masque12.style.height = piece.case[0].hauteurMasque;
      sprite13.style.top = piece.case[0].topDeImage;
      sprite13.style.left = piece.case[t++].leftDeImage;

      if (t == 3) {
        t = 0;
      }
    }, 200);  

    var interval12 = setInterval(function() {
      masque13.style.width = piece.case[0].largeurMasque;
      masque13.style.height = piece.case[0].hauteurMasque;
      sprite14.style.top = piece.case[0].topDeImage;
      sprite14.style.left = piece.case[u++].leftDeImage;

      if (u == 3) {
        u = 0;
      }
    }, 200); 

    var interval13 = setInterval(function() {
      masque14.style.width = piece.case[0].largeurMasque;
      masque14.style.height = piece.case[0].hauteurMasque;
      sprite15.style.top = piece.case[0].topDeImage;
      sprite15.style.left = piece.case[v++].leftDeImage;

      if (v == 3) {
        v = 0;
      }
    }, 200);    
    

    window.document.body.children[0].children[0].children[0].children[1].style.display = "none";
    window.document.body.children[0].children[0].children[0].children[0].style.display = "block";
    window.onkeydown = function(event){
      var left =  window.document.body.children[0].children[0].children[0].style.left;
      if ('' === left){
        left = '200px';
        window.document.body.children[0].children[0].children[0].style.left = left;
      }
      
      var top =  window.document.body.children[0].children[0].children[0].style.top;
      if ('' === top) {
        top = '412px';
        window.document.body.children[0].children[0].children[0].style.top = '412px';
      }
      // var topDebut = parseFloat(top);
      // console.log(top);
      var code = event.keyCode;
      masque.style.width = decompositionDuSprite.perso[i].largeurMasque;
      masque.style.height = decompositionDuSprite.perso[i].hauteurMasque;
      sprite.style.top = decompositionDuSprite.perso[i].topDeImage;

      if (parseFloat(top) === 412) {
        limiteSaut = '230px';
      }
      
      switch(code){
        case 37:
          //gauche

          // changement de sprite mario
          window.document.body.children[0].children[0].children[0].children[0].style.display = "none";
          window.document.body.children[0].children[0].children[0].children[1].style.display = "block";

          // déplacement mario
          if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) > 200 && bool == true) {
            masque.style.width = decompositionALenvers.perso[i].largeurMasque;
            masque.style.height = decompositionALenvers.perso[i].hauteurMasque;
            sprite2.style.top = decompositionALenvers.perso[i].topDeImage;
            sprite2.style.left = decompositionALenvers.perso[i++].leftDeImage;
            sprite.style.transform = 'scale(1)';
            if (i == 4) {
              i=0;
            }
            var left = parseFloat(left) - 10;
            window.document.body.children[0].children[0].children[0].style.left = left + 'px'; 
          }

          // déplacement fond
          if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) >= 450 && bool == true) {
            var fond = window.document.body.children[0].children[0].style.left;
            fond = parseFloat(fond) + 10;
            window.document.body.children[0].children[0].style.left = fond + 'px';
          }
          
          // bloc coté des carrés
          if (parseFloat(left) > 980 && parseFloat(left) <= 1071 && parseFloat(top) > 341) {
            console.log('colisionL');
            bool = false;
          } else {
            bool = true;
          }
          
          if (parseFloat(left) > 1340 && parseFloat(left) < 1431 && parseFloat(top) > 306) {
            console.log('colision2L');
            bool = false;
          }
          if (parseFloat(left) > 1620 && parseFloat(left) < 1711 && parseFloat(top) > 270) {
            console.log('colision3L');
            bool = false;
          }
          if (parseFloat(left) > 2020 && parseFloat(left) < 2111 && parseFloat(top) > 270) {
            console.log('colision4L');
            bool = false;
          }
          if (parseFloat(left) > 5800 && parseFloat(left) < 5900 && parseFloat(top) > 341) {
            console.log('colision5L');
            bool = false;
          }
          if (parseFloat(left) > 6380 && parseFloat(left) < 6470 && parseFloat(top) > 341) {
            console.log('colision6L');
            bool = false;
          }

          // coté des blocs en hauteur
          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 550 && parseFloat(left) < 611) {
            console.log('colisionBloc1 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 699 && parseFloat(left) < 905) {
            console.log('colisionBloc2 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 2730 && parseFloat(left) < 2865) {
            console.log('colisionBloc3 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3340 && parseFloat(left) < 3400) {
            console.log('colisionBloc4 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3550 && parseFloat(left) < 3615) {
            console.log('colisionBloc5 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3770 && parseFloat(left) < 3825) {
            console.log('colisionBloc6 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3877 && parseFloat(left) < 3931) {
            console.log('colisionBloc7 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3980 && parseFloat(left) < 4041) {
            console.log('colisionBloc8 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 4199 && parseFloat(left) < 4252) {
            console.log('colisionBloc9 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 4589 && parseFloat(left) < 4681) {
            console.log('colisionBloc10 Gauche');
            bool = false;
          }

          if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 5980 && parseFloat(left) < 6141) {
            console.log('colisionBloc11 Gauche');
            bool = false;
          }


          // descente des block
          if (parseFloat(left) == 560 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 690 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 2730 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 3340 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 3550 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 3770 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 3880 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 3980 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 4190 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 4590 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 5980 && parseFloat(top) == 270) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }


          // descente des tuyaux par la gauche
          if (parseFloat(left) == 980 && parseFloat(top) == 341) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 1340 && parseFloat(top) == 305) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 1620 && parseFloat(top) == 269) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 2020 && parseFloat(top) == 269) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 5800 && parseFloat(top) == 341) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }

          if (parseFloat(left) == 6370 && parseFloat(top) == 341) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            sauter == true;
          }


          // collisions cotés droit 2e etage
          if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) == 820) {
            console.log('colision Bloc 1 2e etage Gauche');
            bool = false;
            sautBloc = false;
          }

          if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 2840 && parseFloat(left) < 3140) {
            console.log('colision Bloc 2 2e etage Gauche');
            bool = false;
            sautBloc = false;
          }

          if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 3230 && parseFloat(left) < 3390) {
            console.log('colision Bloc 3 2e etage Gauche');
            bool = false;
            sautBloc = false;
          }

          if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 3870 && parseFloat(left) < 3930) {
            console.log('colision Bloc 4 2e etage Gauche');
            bool = false;
            sautBloc = false;
          }

          if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 4300 && parseFloat(left) < 4430) {
            console.log('colision Bloc 5 2e etage Gauche');
            bool = false;
            sautBloc = false;
          }

          if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 4560 && parseFloat(left) < 4720) {
            console.log('colision Bloc 6 2e etage Gauche');
            bool = false;
            sautBloc = false;
          }


          // trou
          if (parseFloat(left) >= 2465 && parseFloat(left) <= 2525 && parseFloat(top) == 412) {
            console.log('trou');
            bool = false;
            window.document.body.children[0].children[0].children[0].className = "masque tomber";
            setTimeout(function(){sprite2.style.left = mort.perso[0].leftDeImage;}, 100);
            window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
            setTimeout(function(){
              if (alert4 == true) {
                alert4 = false;
                window.document.body.children[3].style.display = "block";
                window.document.body.children[0].children[0].children[0].style.display = "none";
              }
            }
            , 1500);
          }
          if (parseFloat(left) >= 3070 && parseFloat(left) < 3170 && parseFloat(top) == 412) {
            console.log('trou 2');
            bool = false;
            window.document.body.children[0].children[0].children[0].className = "masque tomber";
            setTimeout(function(){sprite2.style.left = mort.perso[0].leftDeImage;}, 100);
            window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
            setTimeout(function(){
              if (alert5 == true) {
                alert5 = false;
                window.document.body.children[3].style.display = "block";
                window.document.body.children[0].children[0].children[0].style.display = "none";
              }
            }
            , 1500)
          }
          if (parseFloat(left) >= 5465 && parseFloat(left) <= 5520 && parseFloat(top) == 269) {
            console.log('trou 3');
            bool = false;
            window.document.body.children[0].children[0].children[0].className = "masque tomber";
            setTimeout(function(){sprite2.style.left = mort.perso[0].leftDeImage;}, 100);
            window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
            setTimeout(function(){
              if (alert6 == true) {
                alert6 = false;
                window.document.body.children[3].style.display = "block";
                window.document.body.children[0].children[0].children[0].style.display = "none";
              }
            }
            , 1500)
          }

          if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) >= 7290) {
            window.document.body.children[0].children[0].children[0].children[1].style.display = 'none';
            window.document.body.children[4].style.display = "block";
            // alert('Vous avez terminé le niveau ! BRAVO !!!! Voici le lien pour mon CV complet ! https://alexandremedico.github.io/cv/');
            bool = false;
          }


          // descente des gros blocs
          if (parseFloat(left) == 4870 && parseFloat(top) == 269) {
            var top = 305;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 4840 && parseFloat(top) == 305) {
            var top = 341;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 4800 && parseFloat(top) == 341) {
            var top = 377;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 4770 && parseFloat(top) == 377) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 5370 && parseFloat(top) == 269) {
            var top = 305;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 5340 && parseFloat(top) == 305) {
            var top = 341;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 5300 && parseFloat(top) == 341) {
            var top = 377;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 5270 && parseFloat(top) == 377) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }


          // blocage par la gauche gros blocs
          if (parseFloat(left) == 4930 && parseFloat(top) >= 270) {
            bool = false;
          }

          if (parseFloat(left) == 5140 && parseFloat(top) >= 378) {
            bool = false;
          }

          if (parseFloat(left) == 5110 && parseFloat(top) >= 342) {
            bool = false;
          }

          if (parseFloat(left) == 5070 && parseFloat(top) >= 306) {
            bool = false;
          }

          if (parseFloat(left) == 5040 && parseFloat(top) >= 270) {
            bool = false;
          }

          if (parseFloat(left) == 4980 && parseFloat(top) == 269) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 5450 && parseFloat(top) == 412) {
            bool = false;
          }

          if (parseFloat(left) == 5680 && parseFloat(top) >= 378) {
            bool = false;
          }

          if (parseFloat(left) == 5640 && parseFloat(top) >= 342) {
            bool = false;
          }

          if (parseFloat(left) == 5610 && parseFloat(top) >= 306) {
            bool = false;
          }

          if (parseFloat(left) == 5570 && parseFloat(top) >= 270) {
            bool = false;
          }

          if (parseFloat(left) == 6790 && parseFloat(top) >= 200) {
            bool = false;
          }


          // descente dernier gros bloc
          if (parseFloat(left) == 6700 && parseFloat(top) == 127) {
            var top = 162;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 6660 && parseFloat(top) == 162) {
            var top = 198;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 6620 && parseFloat(top) == 198) {
            var top = 234;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 6590 && parseFloat(top) == 234) {
            var top = 269;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 6550 && parseFloat(top) == 269) {
            var top = 305;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 6520 && parseFloat(top) == 305) {
            var top = 341;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) == 6480 && parseFloat(top) == 341) {
            var top = 377;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }


          // descente 2e etage par la gauche
          if (parseFloat(top) == 127 && parseFloat(left) == 770) {
            var top = 270;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(top) == 127 && parseFloat(left) == 2840) {
            var top = 270;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(top) == 127 && parseFloat(left) == 3230) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(top) == 127 && parseFloat(left) == 3870) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(top) == 127 && parseFloat(left) == 4300) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(top) == 127 && parseFloat(left) == 4550) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          if (parseFloat(left) >= 7050 && parseFloat(left) <= 7110 && parseFloat(top) >= 378) {
            bool = false;
          }

          if (parseFloat(top) == 377 && parseFloat(left) == 7050) {
            var top = 412;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }

          
        break;

        case 38:
          //haut
          
          // window.document.body.children[0].children[0].children[0].children[0].style.display = "none";
          // window.document.body.children[0].children[0].children[0].children[1].style.display = "block";
          if (window.document.body.children[0].children[0].children[0].children[0].style.display == 'block') {
            window.document.body.children[0].children[0].children[0].children[1].style.display = "none";
            sprite.style.left = saut.perso[0].leftDeImage;
          }

          if (window.document.body.children[0].children[0].children[0].children[1].style.display == 'block'){
            window.document.body.children[0].children[0].children[0].children[0].style.display = "none";
            sprite2.style.left = saut.perso[1].leftDeImage;
          }

          if (i == 0) {
            i=0;
          }
          
          // saut
          if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) > parseFloat(limiteSaut) && sauter == true && window.document.body.children[0].children[0].children[0].children[0].style.display == 'block') {
            console.log('saut Droite');
            var top = parseFloat(top) - 7;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            // sauter = true;
          } else if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) > parseFloat(limiteSaut) && sauter == true && window.document.body.children[0].children[0].children[0].children[1].style.display == 'block') {
            console.log('saut Gauche');
            var top = parseFloat(top) - 7;
            window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          }
          
          sauter = true;

          // bloc bas des carrés
          if ((parseFloat(left) >= 556) && (parseFloat(left) <= 603) && parseFloat(top) > 310) {
            console.log('colision bloc 1');
            console.log('avant le saut' + sautBloc);
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              // sautBloc = false;
              limiteSaut = '321px';
              console.log('apres le saut' + sautBloc);
            } else {
              sauter = false;
            }
            if ((parseFloat(left) >= 560) && (parseFloat(left) <= 600) && parseFloat(top) == 321 && carre1 == true) {
              clearInterval(interval1);
              masque2.style.width = vide.case[0].largeurMasque;
              masque2.style.height = vide.case[0].hauteurMasque;
              sprite3.style.top = vide.case[0].topDeImage;
              sprite3.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[2].children[0].style.display = "block";
              carre1 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[2].children[0].style.display = "none";
              },1000);
            }
          }

          if ((( parseFloat(left) >= 699) && (parseFloat(left) <= 890) && parseFloat(top) > 310)){
            console.log('colision bloc 2');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }

            if (( parseFloat(left) >= 740) && (parseFloat(left) <= 780) && parseFloat(top) == 321 && carre2 == true) {
              clearInterval(interval2);
              masque3.style.width = vide.case[0].largeurMasque;
              masque3.style.height = vide.case[0].hauteurMasque;
              sprite4.style.top = vide.case[0].topDeImage;
              sprite4.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[4].children[0].style.display = "block";
              carre2 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[4].children[0].style.display = "none";
              },1000)
            }

            if (( parseFloat(left) >= 810) && (parseFloat(left) <= 850) && parseFloat(top) == 321  && carre3 == true) {
              clearInterval(interval3);
              masque4.style.width = vide.case[0].largeurMasque;
              masque4.style.height = vide.case[0].hauteurMasque;
              sprite5.style.top = vide.case[0].topDeImage;
              sprite5.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[6].children[0].style.display = "block";
              carre3 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[6].children[0].style.display = "none";
              },1000)
            }
          }

          if (( parseFloat(left) >= 780) && (parseFloat(left) <= 810 && parseFloat(top) <= 270)) {
            limiteSaut = '179px';
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 179 && sauter == true) {
              console.log('saut sous bloc haut');
              var top = parseFloat(top) - 7;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (( parseFloat(left) >= 780) && (parseFloat(left) <= 810) && parseFloat(top) == 172 && uneFois == true) {
            uneFois = false;
            clearInterval(interval4);
            score += 1000;
            point.innerHTML = score;
            masque5.style.width = vide.case[0].largeurMasque;
            masque5.style.height = vide.case[0].hauteurMasque;
            sprite6.style.top = vide.case[0].topDeImage;
            sprite6.style.left = vide.case[0].leftDeImage; 
            window.document.body.children[0].children[0].children[8].children[0].style.display = "block";
            window.document.body.children[0].children[0].children[8].children[0].className = "html-case";
            window.document.body.children[0].children[0].children[8].children[0].style.top = "-35px";
            setTimeout(function() {
                window.document.body.children[0].children[0].children[8].children[0].style.display = "none";
                document.body.children[1].children[0].children[0].style.display ="none";
                document.body.children[1].children[0].children[1].style.display ="block";
                document.body.children[1].children[0].children[2].style.display ="block";
                document.body.children[1].children[0].children[2].children[0].style.display ="block";
                document.body.children[1].children[0].children[2].children[0].children[0].style.display ="block";
              }, 1500);
            }
          }

          if (parseFloat(left) >= 820 && parseFloat(left) <= 880 && parseFloat(top) <= 270 ||
          parseFloat(left) >= 700 && parseFloat(left) <= 770 && parseFloat(top) <= 270) {
            limiteSaut = '100px';
          }

          if ((parseFloat(left) >= 2740) && (parseFloat(left) <= 2855) && parseFloat(top) > 300){
            console.log('colision bloc 3');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
            if ((parseFloat(left) >= 2780) && (parseFloat(left) <= 2810) && parseFloat(top) == 321 && deuxFois == true) {
              deuxFois = false;
              console.log('je suis la 2');
              clearInterval(interval5);
              score += 1000;
              point.innerHTML = score;
              masque6.style.width = vide.case[0].largeurMasque;
              masque6.style.height = vide.case[0].hauteurMasque;
              sprite7.style.top = vide.case[0].topDeImage;
              sprite7.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[10].children[0].style.display = "block";
              window.document.body.children[0].children[0].children[10].children[0].className = "css-case";
              window.document.body.children[0].children[0].children[10].children[0].style.top = "-35px";
              setTimeout(function() {
                window.document.body.children[0].children[0].children[10].children[0].style.display = "none";
                document.body.children[1].children[1].children[0].style.display ="none";
                document.body.children[1].children[1].children[1].style.display ="block";
                document.body.children[1].children[1].children[2].style.display ="block";
                document.body.children[1].children[1].children[2].children[0].style.display ="block";
                document.body.children[1].children[1].children[2].children[0].children[0].style.display ="block";
              }, 1500);
            }
          }

          if ((parseFloat(left) >= 3343) && (parseFloat(left) <= 3390) && parseFloat(top) > 300){
            console.log('colision bloc 4');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
          }

          if (( parseFloat(left) >= 3350) && (parseFloat(left) <= 3380) && parseFloat(top) <= 270) {
            limiteSaut = '179px';
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 179 && sauter == true) {
              console.log('saut sous bloc haut 2');
              var top = parseFloat(top) - 7;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
            if (( parseFloat(left) >= 3350) && (parseFloat(left) <= 3380) && parseFloat(top) == 172  && carre4 == true) {
              clearInterval(interval6);
              score += 100;
              point.innerHTML = score;
              masque7.style.width = vide.case[0].largeurMasque;
              masque7.style.height = vide.case[0].hauteurMasque;
              sprite8.style.top = vide.case[0].topDeImage;
              sprite8.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[12].children[0].style.display = "block";
              carre4 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[12].children[0].style.display = "none";
              },1000)
            }
          }

          if ((parseFloat(left) >= 3556) && (parseFloat(left) <= 3605) && parseFloat(top) > 300){
            console.log('colision bloc 5');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
          }

          if ((parseFloat(left) >= 3771) && (parseFloat(left) <= 3818) && parseFloat(top) > 300){
            console.log('colision bloc 6');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
            if ((parseFloat(left) >= 3771) && (parseFloat(left) <= 3818) && parseFloat(top) == 321 && troisFois == true) {
              troisFois = false;
              score += 1000;
              point.innerHTML = score;
              console.log('je suis la 3');
              clearInterval(interval8);
              masque9.style.width = vide.case[0].largeurMasque;
              masque9.style.height = vide.case[0].hauteurMasque;
              sprite10.style.top = vide.case[0].topDeImage;
              sprite10.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[16].children[0].style.display = "block";
              window.document.body.children[0].children[0].children[16].children[0].className = "js-case";
              window.document.body.children[0].children[0].children[16].children[0].style.top = "-35px";
              setTimeout(function() {
                window.document.body.children[0].children[0].children[16].children[0].style.display = "none";
                document.body.children[1].children[2].children[0].style.display ="none";
                document.body.children[1].children[2].children[1].style.display ="block";
                document.body.children[1].children[2].children[2].style.display ="block";
                document.body.children[1].children[2].children[2].children[0].style.display ="block";
                document.body.children[1].children[2].children[2].children[0].children[0].style.display ="block";
              }, 1500);
            }
          }

          if ((parseFloat(left) >= 3877) && (parseFloat(left) <= 3925) && parseFloat(top) > 300){
            console.log('colision bloc 7');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
            if ((parseFloat(left) >= 3877) && (parseFloat(left) <= 3925) && parseFloat(top) == 321 && carre5 == true) {
              clearInterval(interval9);
              masque10.style.width = vide.case[0].largeurMasque;
              masque10.style.height = vide.case[0].hauteurMasque;
              sprite11.style.top = vide.case[0].topDeImage;
              sprite11.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[18].children[0].style.display = "block";
              carre5 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[18].children[0].style.display = "none";
              },1000)
            }
          }

          if ((parseFloat(left) >= 3880) && (parseFloat(left) <= 3920) && parseFloat(top) <= 270) {
            limiteSaut = '179px';
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 179 && sauter == true) {
              console.log('saut sous bloc haut 3');
              var top = parseFloat(top) - 7;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
            if ((parseFloat(left) >= 3880) && (parseFloat(left) <= 3920) && parseFloat(top) == 172 && carre7 == true) {
              clearInterval(interval7);
              score += 100;
              point.innerHTML = score;
              masque8.style.width = vide.case[0].largeurMasque;
              masque8.style.height = vide.case[0].hauteurMasque;
              sprite9.style.top = vide.case[0].topDeImage;
              sprite9.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[14].children[0].style.display = "block";
              carre7 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[14].children[0].style.display = "none";
              },1000)
            }
          }

          if ((parseFloat(left) >= 3986) && (parseFloat(left) <= 4033) && parseFloat(top) > 300){
            console.log('colision bloc 8');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
            if ((parseFloat(left) >= 3986) && (parseFloat(left) <= 4033) && parseFloat(top) == 321 && carre6 == true) {
              clearInterval(interval10);
              masque11.style.width = vide.case[0].largeurMasque;
              masque11.style.height = vide.case[0].hauteurMasque;
              sprite12.style.top = vide.case[0].topDeImage;
              sprite12.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[20].children[0].style.display = "block";
              carre6 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[20].children[0].style.display = "none";
              },1000)
            }
          }

          if ((parseFloat(left) >= 4199) && (parseFloat(left) <= 4248) && parseFloat(top) > 300){
            console.log('colision bloc 9');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
          }

          if ((parseFloat(left) >= 4592) && (parseFloat(left) <= 4676) && parseFloat(top) > 300){
            console.log('colision bloc 10');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
          }

          if ((parseFloat(left) >= 4600) && (parseFloat(left) <= 4630) && parseFloat(top) <= 270) {
            limiteSaut = '179px';
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 179 && sauter == true) {
              console.log('saut sous bloc haut 4');
              var top = parseFloat(top) - 7;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
            if ((parseFloat(left) >= 4600) && (parseFloat(left) <= 4630) && parseFloat(top) == 172 && carre8 == true) {
              clearInterval(interval11);
              score += 100;
              point.innerHTML = score;
              masque12.style.width = vide.case[0].largeurMasque;
              masque12.style.height = vide.case[0].hauteurMasque;
              sprite13.style.top = vide.case[0].topDeImage;
              sprite13.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[22].children[0].style.display = "block";
              carre8 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[22].children[0].style.display = "none";
              },1000)
            }
          }

          if ((parseFloat(left) >= 4640) && (parseFloat(left) <= 4670) && parseFloat(top) <= 270) {
            limiteSaut = '179px';
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 179 && sauter == true) {
              console.log('saut sous bloc haut 4');
              var top = parseFloat(top) - 7;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
            if ((parseFloat(left) >= 4640) && (parseFloat(left) <= 4670) && parseFloat(top) == 172 && carre9 == true) {
              clearInterval(interval12);
              score += 100;
              point.innerHTML = score;
              masque13.style.width = vide.case[0].largeurMasque;
              masque13.style.height = vide.case[0].hauteurMasque;
              sprite14.style.top = vide.case[0].topDeImage;
              sprite14.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[24].children[0].style.display = "block";
              carre9 = false;
              setTimeout(function() {
                window.document.body.children[0].children[0].children[24].children[0].style.display = "none";
              },1000)
            }
          }
          
          if ((parseFloat(left) >= 5985) && (parseFloat(left) <= 6140) && parseFloat(top) > 300){
            console.log('colision bloc 11');
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.top) >= 327 && sauter == true) {
              console.log('saut');
              // var top = parseFloat(top) - 7;
              // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              limiteSaut = "321px";
            } else {
              sauter = false;
            }
            if ((parseFloat(left) >= 6060) && (parseFloat(left) <= 6090) && parseFloat(top) == 321 && quatreFois == true) {
              quatreFois = false;
              score += 1000;
              point.innerHTML = score;
              console.log('je suis la 4');
              clearInterval(interval13);
              masque14.style.width = vide.case[0].largeurMasque;
              masque14.style.height = vide.case[0].hauteurMasque;
              sprite15.style.top = vide.case[0].topDeImage;
              sprite15.style.left = vide.case[0].leftDeImage; 
              window.document.body.children[0].children[0].children[26].children[0].style.display = "block";
              window.document.body.children[0].children[0].children[26].children[0].className = "node-js-case";
              window.document.body.children[0].children[0].children[26].children[0].style.top = "-35px";
              setTimeout(function() {
                window.document.body.children[0].children[0].children[26].children[0].style.display = "none";
                document.body.children[1].children[3].children[0].style.display ="none";
                document.body.children[1].children[3].children[1].style.display ="block";
                document.body.children[1].children[3].children[2].style.display ="block";
                document.body.children[1].children[3].children[2].children[0].style.display ="block";
                document.body.children[1].children[3].children[2].children[0].children[0].style.display ="block";
              }, 1500);
            }
          }
          
          
        break;

        case 39:
          // droite
          window.document.body.children[0].children[0].children[0].children[1].style.display = "none";
          window.document.body.children[0].children[0].children[0].children[0].style.display = "block";

          // sprite mario
          if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) < 450) {
            // console.log('Déplacement mario');
            sprite.style.left = decompositionDuSprite.perso[i++].leftDeImage;
            if (i == 4) {
              i=0;
            }
            var left = parseFloat(left) + 10;
            window.document.body.children[0].children[0].children[0].style.left = left + 'px';
          }
          
          // sprite fond
          if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) >= 450 && parseFloat(window.document.body.children[0].children[0].children[0].style.left) < 7290 && bool == true) {
            // var bool = true;
            // console.log('deplacement du fond');
            var fond = window.document.body.children[0].children[0].style.left;
            if (fond === '') {
              fond = 0;
            }
            fond = parseFloat(fond) - 10;
            sprite.style.left = decompositionDuSprite.perso[i++].leftDeImage;
            if (i == 4) {
              i=0;
            }
            var left = parseFloat(left) + 10;
            window.document.body.children[0].children[0].children[0].style.left = left + 'px';
            window.document.body.children[0].children[0].style.left = fond + 'px';
          }

          // block coté des carrés
            if (parseFloat(left) >= 980 && parseFloat(left) < 1070 && parseFloat(top) > 341) {
              console.log('colision');
              bool = false;
            } else {
              bool = true;
            }
            
            if (parseFloat(left) >= 1340 && parseFloat(left) < 1425 && parseFloat(top) > 306) {
              console.log('colision2');
              bool = false;
            }

            if (parseFloat(left) >= 1620 && parseFloat(left) < 1710 && parseFloat(top) > 270) {
              console.log('colision3');
              bool = false;
            }

            if (parseFloat(left) >= 2010 && parseFloat(left) < 2105 && parseFloat(top) > 270) {
              console.log('colision4');
              bool = false;
            }

            if (parseFloat(left) >= 5800 && parseFloat(left) < 5890 && parseFloat(top) > 341) {
              console.log('colision5');
              bool = false;
            }

            if (parseFloat(left) > 6370 && parseFloat(left) < 6460 && parseFloat(top) > 341) {
              console.log('colision6');
              bool = false;
            }


            // coté des blocs en hauteur
            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 550 && parseFloat(left) < 600) {
              console.log('colisionBloc1');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 700 && parseFloat(left) < 890) {
              console.log('colisionBloc2');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 2730 && parseFloat(left) < 2855) {
              console.log('colisionBloc3');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3340 && parseFloat(left) < 3390) {
              console.log('colisionBloc4');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3550 && parseFloat(left) < 3605) {
              console.log('colisionBloc5');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3770 && parseFloat(left) < 3819) {
              console.log('colisionBloc6');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3870 && parseFloat(left) < 3927) {
              console.log('colisionBloc7');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 3980 && parseFloat(left) < 4034) {
              console.log('colisionBloc8');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 4190 && parseFloat(left) < 4248) {
              console.log('colisionBloc9');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 4589 && parseFloat(left) < 4676) {
              console.log('colisionBloc10');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 271 && parseFloat(top) < 321 && parseFloat(left) >= 5980 && parseFloat(left) < 6141) {
              console.log('colisionBloc11');
              bool = false;
              sautBloc = false;
            }


            // collisions cotés droit 2e etage
            if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) == 770) {
              console.log('colision Bloc 1 2e etage');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 2840 && parseFloat(left) < 3140) {
              console.log('colision Bloc 2 2e etage');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 3230 && parseFloat(left) < 3390) {
              console.log('colision Bloc 3 2e etage');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 3870 && parseFloat(left) < 3930) {
              console.log('colision Bloc 4 2e etage');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 4300 && parseFloat(left) < 4430) {
              console.log('colision Bloc 5 2e etage');
              bool = false;
              sautBloc = false;
            }

            if (parseFloat(top) > 128 && parseFloat(top) < 178 && parseFloat(left) >= 4560 && parseFloat(left) < 4720) {
              console.log('colision Bloc 6 2e etage');
              bool = false;
              sautBloc = false;
            }


            // descente des block
            if (parseFloat(left) == 600 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 890 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 2860 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 3390 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 3610 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 3820 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 3930 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 4040 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 4250 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 4680 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 6140 && parseFloat(top) == 270) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }


            // descente des tuyaux par la droite
            if (parseFloat(left) == 1070 && parseFloat(top) == 341) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 1430 && parseFloat(top) == 305) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 1720 && parseFloat(top) == 269) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 2110 && parseFloat(top) == 269) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 5900 && parseFloat(top) == 341) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }

            if (parseFloat(left) == 6470 && parseFloat(top) == 341) {
              var top = 376;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              sauter == true;
            }


            // gros block 1
            if (parseFloat(left) == 4770 && parseFloat(top) >= 378) {
              bool = false;
            }

            if (parseFloat(left) == 4800 && parseFloat(top) >= 342) {
              bool = false;
            }

            if (parseFloat(left) == 4840 && parseFloat(top) >= 306) {
              bool = false;
            }

            if (parseFloat(left) == 4870 && parseFloat(top) >= 270) {
              bool = false;
            }

            if ((parseFloat(left) == 4930 && parseFloat(top) == 269)) {
              console.log("descente apres gros bloc 1");
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }


            // gros bloc 2
            if (parseFloat(left) == 4980 && parseFloat(top) > 270) {
              bool = false;
            }
    
            if ((parseFloat(left) == 5040 && parseFloat(top) == 269)) {
              var top = 305;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
    
            if ((parseFloat(left) == 5070 && parseFloat(top) == 305)) {
              var top = 341;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
    
            if ((parseFloat(left) == 5110 && parseFloat(top) == 341)) {
              var top = 377;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if ((parseFloat(left) == 5140 && parseFloat(top) == 377)) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }


            // gros bloc 3
            if (parseFloat(left) == 5270 && parseFloat(top) >= 378) {
              bool = false;
            }

            if (parseFloat(left) == 5300 && parseFloat(top) >= 342) {
              bool = false;
            }

            if (parseFloat(left) == 5340 && parseFloat(top) >= 306) {
              bool = false;
            }

            if (parseFloat(left) == 5370 && parseFloat(top) >= 270) {
              bool = false;
            }


            // gros bloc 4    
            if ((parseFloat(left) == 5570 && parseFloat(top) == 269)) {
              var top = 305;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
    
            if ((parseFloat(left) == 5610 && parseFloat(top) == 305)) {
              var top = 341;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }
    
            if ((parseFloat(left) == 5640 && parseFloat(top) == 341)) {
              var top = 377;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if ((parseFloat(left) == 5680 && parseFloat(top) == 377)) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }


            // gros bloc 5
            if (parseFloat(left) == 6480 && parseFloat(top) >= 342) {
              bool = false;
            }

            if (parseFloat(left) == 6520 && parseFloat(top) >= 306) {
              bool = false;
            }

            if (parseFloat(left) == 6550 && parseFloat(top) >= 270) {
              bool = false;
            }

            if (parseFloat(left) == 6590 && parseFloat(top) >= 235) {
              bool = false;
            }

            if (parseFloat(left) == 6620 && parseFloat(top) >= 199) {
              bool = false;
            }

            if (parseFloat(left) == 6660 && parseFloat(top) >= 163) {
              bool = false;
            }

            if (parseFloat(left) == 6700 && parseFloat(top) >= 128) {
              bool = false;
            }

            if (parseFloat(left) >= 6790 && parseFloat(top) == 127) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (parseFloat(left) >= 7050 && parseFloat(left) <= 7110 && parseFloat(top) >= 378) {
              bool = false;
            }


            // descente 2e etage de case
            if (parseFloat(top) == 127 && parseFloat(left) == 820) {
              var top = 270;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (parseFloat(top) <= 127 && parseFloat(left) == 3140 ) {
              bool = false;
              var top = 484;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
              window.document.body.children[0].children[0].children[0].className = "masque tomber";
              setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
              window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
              setTimeout(function(){
                if (alert7 == true) {
                  alert7 = false;
                  window.document.body.children[3].style.display = "block";
                  window.document.body.children[0].children[0].children[0].style.display = "none";
                }
              }
              , 1500);
            }

            if (parseFloat(top) == 127 && parseFloat(left) == 3390) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (parseFloat(top) == 127 && parseFloat(left) == 3930) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (parseFloat(top) == 127 && parseFloat(left) == 4430) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (parseFloat(top) == 127 && parseFloat(left) == 4720) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }

            if (parseFloat(top) == 377 && parseFloat(left) == 7110) {
              var top = 412;
              window.document.body.children[0].children[0].children[0].style.top = top + 'px';
            }


            // trou
            if (parseFloat(left) >= 2465 && parseFloat(left) <= 2525 && parseFloat(top) == 412) {
              console.log('trou');
              bool = false;
              window.document.body.children[0].children[0].children[0].className = "masque tomber";
              setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
              window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
              setTimeout(function(){
                if (alert1 == true) {
                  alert1 = false;
                  window.document.body.children[3].style.display = "block";
                  window.document.body.children[0].children[0].children[0].style.display = "none";
                }
              }
              , 1500);
            }
            if (parseFloat(left) >= 3070 && parseFloat(left) <= 3170 && parseFloat(top) == 412) {
              console.log('trou 2');
              bool = false;
              window.document.body.children[0].children[0].children[0].className = "masque tomber";
              setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
              window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
              setTimeout(function(){
                if (alert2 == true) {
                  alert2 = false;
                  window.document.body.children[3].style.display = "block";
                  window.document.body.children[0].children[0].children[0].style.display = "none";
                }
              }
              , 1500)
            }
            if (parseFloat(left) >= 5465 && parseFloat(left) <= 5530 && parseFloat(top) == 269) {
              console.log('trou 3');
              bool = false;
              window.document.body.children[0].children[0].children[0].className = "masque tomber";
              setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
              window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
              setTimeout(function(){
                if (alert3 == true) {
                  alert3 = false;
                  window.document.body.children[3].style.display = "block";
                  window.document.body.children[0].children[0].children[0].style.display = "none";
                }
              }
              , 1500)
            }

            // révélation de mon cv
            // if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) == 1000) {
            //   document.body.children[1].children[0].children[0].style.display ="none";
            //   document.body.children[1].children[0].children[1].style.display ="block";
            //   document.body.children[1].children[0].children[2].style.display ="block";
            //   document.body.children[1].children[0].children[2].children[0].style.display ="block";
            //   document.body.children[1].children[0].children[2].children[0].children[0].style.display ="block";
            // }

            // if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) == 2000) {
            //   document.body.children[1].children[1].children[0].style.display ="none";
            //   document.body.children[1].children[1].children[1].style.display ="block";
            //   document.body.children[1].children[1].children[2].style.display ="block";
            //   document.body.children[1].children[1].children[2].children[0].style.display ="block";
            //   document.body.children[1].children[1].children[2].children[0].children[0].style.display ="block";
            // }

            // if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) == 3000) {
            //   document.body.children[1].children[2].children[0].style.display ="none";
            //   document.body.children[1].children[2].children[1].style.display ="block";
            //   document.body.children[1].children[2].children[2].style.display ="block";
            //   document.body.children[1].children[2].children[2].children[0].style.display ="block";
            //   document.body.children[1].children[2].children[2].children[0].children[0].style.display ="block";
            // }

            // if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) == 4000) {
            //   document.body.children[1].children[3].children[0].style.display ="none";
            //   document.body.children[1].children[3].children[1].style.display ="block";
            //   document.body.children[1].children[3].children[2].style.display ="block";
            //   document.body.children[1].children[3].children[2].children[0].style.display ="block";
            //   document.body.children[1].children[3].children[2].children[0].children[0].style.display ="block";
            // }

            // if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) == 5000) {
            //   document.body.children[1].children[4].children[0].style.display ="none";
            //   document.body.children[1].children[4].children[1].style.display ="block";
            //   document.body.children[1].children[4].children[2].style.display ="block";
            //   document.body.children[1].children[4].children[2].children[0].style.display ="block";
            //   document.body.children[1].children[4].children[2].children[0].children[0].style.display ="block";
            // }

            // if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) == 6000) {
            //   document.body.children[1].children[5].children[0].style.display ="none";
            //   document.body.children[1].children[5].children[1].style.display ="block";
            //   document.body.children[1].children[5].children[2].style.display ="block";
            //   document.body.children[1].children[5].children[2].children[0].style.display ="block";
            //   document.body.children[1].children[5].children[2].children[0].children[0].style.display ="block";
            // }

            // fin
            if (parseFloat(window.document.body.children[0].children[0].children[0].style.left) >= 7290) {
              window.document.body.children[0].children[0].children[0].children[0].style.display = 'none';
              window.document.body.children[4].style.display = "block";
              // alert('Vous avez terminé le niveau ! BRAVO !!!! Voici le lien pour mon CV complet ! https://alexandremedico.github.io/cv/');
              bool = false;
              document.body.children[1].children[4].children[0].style.display ="none";
              document.body.children[1].children[4].children[1].style.display ="block";
              document.body.children[1].children[4].children[2].style.display ="block";
              document.body.children[1].children[4].children[2].children[0].style.display ="block";
              document.body.children[1].children[4].children[2].children[0].children[0].style.display ="block";

              document.body.children[1].children[5].children[0].style.display ="none";
              document.body.children[1].children[5].children[1].style.display ="block";
              document.body.children[1].children[5].children[2].style.display ="block";
              document.body.children[1].children[5].children[2].children[0].style.display ="block";
              document.body.children[1].children[5].children[2].children[0].children[0].style.display ="block";
            }
                  
           
        break;

        case 40:
          //bas
          // sprite.style.left = decompositionDuSprite.perso[i++].leftDeImage;
          // if (i == 0) {
          //   i=0;
          // }
          // var top = parseFloat(top) + 143;
          // window.document.body.children[0].children[0].style.top = top + 'px';

          
        break;
      };
      
    };

    window.onkeyup = function (event) {
      var code1 = event.keyCode;

      // descente sur bloc
      // var top = 412;
      // window.document.body.children[0].children[0].children[0].style.top = top + 'px';
      var top =  window.document.body.children[0].children[0].children[0].style.top;
      if ('' === top) {
        top = '412px';
        window.document.body.children[0].children[0].children[0].style.top = '412px';
      }

      var left =  window.document.body.children[0].children[0].children[0].style.left;
      if ('' === left){
        left = '200px';
        window.document.body.children[0].children[0].children[0].style.left = left;
      }

      var stop = {
        perso: [{
                largeurMasque: '16px',
                hauteurMasque: '16px',
                topDeImage: '-34px',
                leftDeImage: '-81px'
            }]
          };


      switch(code1){
      case 13:
        i=0;
        sprite.style.left = decompositionDuSprite.perso[i].leftDeImage;
        masque.style.width = decompositionDuSprite.perso[i].largeurMasque;
        masque.style.height = decompositionDuSprite.perso[i].hauteurMasque;
        sprite.style.top = decompositionDuSprite.perso[i].topDeImage;
      break;
      case 39:
          // droite
          masque.style.width = stop.perso[0].largeurMasque;
          masque.style.height = stop.perso[0].hauteurMasque;
          sprite.style.top = stop.perso[0].topDeImage;
          sprite.style.left = stop.perso[0].leftDeImage;

          // descente sur bloc
          // if (parseFloat(left) >= 550 && parseFloat(left) < 600 && parseFloat(top) < 350) {
          //   console.log("saut sur bloc1");
          //   var top = 270;
          //   window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          // } else {

          // }
      break;
      case 37:
        //gauche

        // masque.style.width = decompositionDuSprite.perso[0].largeurMasque;
        // masque.style.height = decompositionDuSprite.perso[0].hauteurMasque;
        sprite2.style.top = decompositionDuSprite.perso[0].topDeImage;
        sprite2.style.left = decompositionDuSprite.perso[0].leftDeImage;
      break;
      case 38:
        // haut

        // window.document.body.children[0].children[0].children[0].className = "masque";
        sprite.style.left = decompositionDuSprite.perso[0].leftDeImage;
        sprite2.style.left = decompositionDuSprite.perso[0].leftDeImage;
        

        // descente du saut entre les cases et tuyaux
        if (parseFloat(top) >= 90 && parseFloat(left) <= 550) {
          console.log('descente 1');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          // var descente = setInterval(function () {
          //   var top = parseFloat(top) + 7;
          //   window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          //   if (parseFloat(top) == 412) {
          //     clearInterval(descente);
          //   }
          // }, 200);
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 600 && parseFloat(left) <= 700) {
          console.log('descente 2');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) > 890 && parseFloat(left) <= 980) {
          console.log('descente 3');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) > 1069 && parseFloat(left) <= 1340) {
          console.log('descente 4');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) > 1429 && parseFloat(left) <= 1620) {
          console.log('descente 5');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) > 1719 && parseFloat(left) <= 2020) {
          console.log('descente 6');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) > 2109 && parseFloat(left) <= 2460) {
          console.log('descente avant trou 1');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 2465 && parseFloat(left) <= 2525) {
          console.log('descente trou 1');
          var top = 484;
          bool = false;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          window.document.body.children[0].children[0].children[0].className = "masque tomber";
          setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
          setTimeout(function(){sprite2.style.left = mort.perso[0].leftDeImage;}, 100);
          window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
          setTimeout(function(){
            if (alert8 == true) {
              alert8 = false;
              window.document.body.children[3].style.display = "block";
              window.document.body.children[0].children[0].children[0].style.display = "none";
            }
          }
          , 1500);
        }

        if (parseFloat(top) >= 90 && parseFloat(left) > 2525 && parseFloat(left) <= 2730) {
          console.log('descente apres trou 1');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 179 && parseFloat(left) > 2859 && parseFloat(left) <= 3060) {
          console.log('descente avant trou 2');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 179 && parseFloat(left) >= 3070 && parseFloat(left) < 3170) {
          console.log('descente trou 2');
          var top = 484;
          bool = false;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          window.document.body.children[0].children[0].children[0].className = "masque tomber";
          setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
          setTimeout(function(){sprite2.style.left = mort.perso[0].leftDeImage;}, 100);
          window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
          setTimeout(function(){
            if (alert9 == true) {
              alert9 = false;
              window.document.body.children[3].style.display = "block";
              window.document.body.children[0].children[0].children[0].style.display = "none";
            }
          }
          , 1500);
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 3170 && parseFloat(left) <= 3230) {
          console.log('descente apres trou 2');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 179 && parseFloat(left) >= 3240 && parseFloat(left) <= 3340) {
          console.log('descente apres trou 2');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 3390 && parseFloat(left) <= 3550) {
          console.log('descente 7');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 3610 && parseFloat(left) <= 3770) {
          console.log('descente 8');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 3820 && parseFloat(left) <= 3870) {
          console.log('descente 9');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }
        
        if (parseFloat(top) >= 90 && parseFloat(left) >= 3930 && parseFloat(left) <= 3980) {
          console.log('descente 10');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 4040 && parseFloat(left) <= 4190) {
          console.log('descente 11');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 4250 && parseFloat(left) <= 4300) {
          console.log('descente 12');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 179 && parseFloat(left) >= 4310 && parseFloat(left) <= 4420) {
          console.log('descente 12');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 4430 && parseFloat(left) <= 4550) {
          console.log('descente 12');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 179 && parseFloat(left) >= 4560 && parseFloat(left) <= 4590) {
          console.log('descente 12');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 179 && parseFloat(left) >= 4680 && parseFloat(left) <= 4770) {
          console.log('descente avant gros bloc 1');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 4930 && parseFloat(left) <= 4980) {
          console.log('descente entre gros bloc 1 et gros bloc 2');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 5140 && parseFloat(left) <= 5270) {
          console.log('descente apres gros bloc 2');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 5465 && parseFloat(left) < 5520) {
          console.log('descente trou 3');
          var top = 484;
          bool = false;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          window.document.body.children[0].children[0].children[0].className = "masque tomber";
          setTimeout(function(){sprite.style.left = mort.perso[0].leftDeImage;}, 100);
          setTimeout(function(){sprite2.style.left = mort.perso[0].leftDeImage;}, 100);
          window.document.body.children[0].children[0].children[0].className = "masque tomber mort";
          setTimeout(function(){
            if (alert10 == true) {
              alert10 = false;
              window.document.body.children[3].style.display = "block";
              window.document.body.children[0].children[0].children[0].style.display = "none";
            }
          }
          , 1500);
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 5680 && parseFloat(left) <= 5800) {
          console.log('descente apres gros bloc 4');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 5900 && parseFloat(left) <= 5980) {
          console.log('descente 13');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 6140 && parseFloat(left) <= 6370) {
          console.log('descente 14');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 6790 && parseFloat(left) <= 7050) {
          console.log('descente 15');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 7060 && parseFloat(left) <= 7100) {
          console.log('descente 16');
          var top = 377;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(top) >= 90 && parseFloat(left) >= 7110) {
          console.log('descente 17');
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }


        // descente en dessous des cases
        if (parseFloat(left) >= 550 && parseFloat(left) < 600 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 700 && parseFloat(left) < 890 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 2730 && parseFloat(left) < 2855 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 3340 && parseFloat(left) < 3390 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 3555 && parseFloat(left) < 3605 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 3770 && parseFloat(left) < 3819 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 3877 && parseFloat(left) < 3927 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 3980 && parseFloat(left) < 4034 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 4199 && parseFloat(left) < 4248 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 4589 && parseFloat(left) < 4676 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }

        if (parseFloat(left) >= 5980 && parseFloat(left) < 6141 && parseFloat(top) > 310) {
          var top = 412;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }


        // saut sur les blocs
        if (parseFloat(left) > 550 && parseFloat(left) < 600 && parseFloat(top) < 300) {
          console.log("saut sur bloc1");
          console.log('je suis descendu');
          console.log(sautBloc);
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 700 && parseFloat(left) <= 770  && parseFloat(top) < 271) {
          console.log("saut sur bloc2");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }  
        
        if (parseFloat(left) >= 820 && parseFloat(left) < 880  && parseFloat(top) < 300) {
          console.log("saut sur bloc2");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 2730 && parseFloat(left) < 2855  && parseFloat(top) < 300) {
          console.log("saut sur bloc3");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 3340 && parseFloat(left) < 3390  && parseFloat(top) < 300 && parseFloat(top) >= 172) {
          console.log("saut sur bloc4");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 3555 && parseFloat(left) < 3605  && parseFloat(top) < 300) {
          console.log("saut sur bloc5");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 3770 && parseFloat(left) < 3819  && parseFloat(top) < 300) {
          console.log("saut sur bloc6");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 3877 && parseFloat(left) < 3927  && parseFloat(top) < 300 && parseFloat(top) >= 172) {
          console.log("saut sur bloc7");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 3980 && parseFloat(left) < 4034  && parseFloat(top) < 300) {
          console.log("saut sur bloc8");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 4199 && parseFloat(left) < 4248  && parseFloat(top) < 300) {
          console.log("saut sur bloc9");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 4589 && parseFloat(left) < 4676  && parseFloat(top) < 300 && parseFloat(top) >= 172) {
          console.log("saut sur bloc10");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) > 5980 && parseFloat(left) < 6141  && parseFloat(top) < 300) {
          console.log("saut sur bloc11");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }


        // saut sur tuyau
        if (parseFloat(left) > 980 && parseFloat(left) < 1070 && parseFloat(top) < 340) {
          console.log("saut sur le tuyau 1");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if (parseFloat(left) >= 1340 && parseFloat(left) < 1425 && parseFloat(top) < 305) {
          console.log("saut sur le tuyau 2");
          var top = 305;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '130px';
        }

        if (parseFloat(left) >= 1620 && parseFloat(left) < 1710 && parseFloat(top) < 265) {
          console.log("saut sur le tuyau 3");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 2019 && parseFloat(left) < 2105 && parseFloat(top) < 265) {
          console.log("saut sur le tuyau 4");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 5800 && parseFloat(left) < 5890 && parseFloat(top) < 340) {
          console.log("saut sur le tuyau 5");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if (parseFloat(left) >= 6370 && parseFloat(left) < 6460 && parseFloat(top) < 340) {
          console.log("saut sur le tuyau 6");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }
        

        // incrémentation score
        var increment = function () {
          score += 100;
          point.innerHTML = score;
          console.log('bonjour')
        }

        if (parseFloat(left) >= 560 && parseFloat(left) <= 600 && parseFloat(top) >= 300 && inc == true) {
          inc = false;
          increment();
        }

        if (parseFloat(left) >= 740 && parseFloat(left) <= 780 && parseFloat(top) >= 300 && inc1 == true) {
          inc1 = false;
          increment();
        }

        if (parseFloat(left) >= 810 && parseFloat(left) <= 850 && parseFloat(top) >= 300 && inc2 == true) {
          inc2 = false;
          increment();
        }

        if (parseFloat(left) >= 3877 && parseFloat(left) <= 3925 && parseFloat(top) >= 300 && inc3 == true) {
          inc3 = false;
          increment();
        }

        if (parseFloat(left) >= 3986 && parseFloat(left) <= 4033 && parseFloat(top) >= 300 && inc4 == true) {
          inc4 = false;
          increment();
        }


        // descente sur le gros bloc 1
        if ((parseFloat(left) > 4770 && parseFloat(left) <= 4800 && parseFloat(top) < 378)) {
          console.log("saut sur le gros bloc 1");
          var top = 377;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '200px';
        }

        if ((parseFloat(left) > 4805 && parseFloat(left) <= 4840 && parseFloat(top) < 342)) {
          console.log("saut sur le gros bloc 2");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if ((parseFloat(left) >= 4850 && parseFloat(left) <= 4870 && parseFloat(top) < 306)) {
          console.log("saut sur le gros bloc 3");
          var top = 305;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '130px';
        }

        if ((parseFloat(left) > 4880 && parseFloat(left) <= 4920 && parseFloat(top) < 270)) {
          console.log("saut sur le gros bloc 4");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }


        // descente sur le gros bloc 2
        if ((parseFloat(left) >= 4990 && parseFloat(left) <= 5030 && parseFloat(top) < 270)) {
          console.log("saut sur le gros bloc 5");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if ((parseFloat(left) >= 5040 && parseFloat(left) < 5070 && parseFloat(top) < 304)) {
          console.log("saut sur le gros bloc 6");
          var top = 305;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '130px';
        }

        if ((parseFloat(left) >= 5070 && parseFloat(left) <= 5100 && parseFloat(top) < 340)) {
          console.log("saut sur le gros bloc 7");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if ((parseFloat(left) >= 5110 && parseFloat(left) <= 5140 && parseFloat(top) < 376)) {
          console.log("saut sur le gros bloc 8");
          var top = 377;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '200px';
        }


        // descente sur le gros bloc 3
        if ((parseFloat(left) >= 5280 && parseFloat(left) < 5310 && parseFloat(top) < 378)) {
          console.log("saut sur le gros bloc 9");
          var top = 377;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '200px';
        }

        if ((parseFloat(left) >= 5310 && parseFloat(left) <= 5340 && parseFloat(top) < 342)) {
          console.log("saut sur le gros bloc 10");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if ((parseFloat(left) >= 5350 && parseFloat(left) <= 5370 && parseFloat(top) < 306)) {
          console.log("saut sur le gros bloc 11");
          var top = 305;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '130px';
        }

        if ((parseFloat(left) >= 5380 && parseFloat(left) <= 5460 && parseFloat(top) < 270)) {
          console.log("saut sur le gros bloc 12");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }


        // descente sur le gros bloc 4
        if ((parseFloat(left) >= 5520 && parseFloat(left) <= 5560 && parseFloat(top) < 270)) {
          console.log("saut sur le gros bloc 13");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if ((parseFloat(left) >= 5570 && parseFloat(left) <= 5600 && parseFloat(top) < 304)) {
          console.log("saut sur le gros bloc 14");
          var top = 305;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '130px';
        }

        if ((parseFloat(left) >= 5610 && parseFloat(left) <= 5630 && parseFloat(top) < 340)) {
          console.log("saut sur le gros bloc 15");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if ((parseFloat(left) >= 5640 && parseFloat(left) <= 5670 && parseFloat(top) < 376)) {
          console.log("saut sur le gros bloc 16");
          var top = 377;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '200px';
        }


        // descente sur gros bloc 5
        if (parseFloat(left) >= 6460 && parseFloat(left) <= 6480 && parseFloat(top) < 376) {
          console.log("saut sur le gros bloc 17");
          var top = 377;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '200px';
        }

        if (parseFloat(left) >= 6490 && parseFloat(left) <= 6520 && parseFloat(top) < 340) {
          console.log("saut sur le gros bloc 18");
          var top = 341;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '170px';
        }

        if (parseFloat(left) >= 6530 && parseFloat(left) <= 6550 && parseFloat(top) < 304) {
          console.log("saut sur le gros bloc 19");
          var top = 305;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '130px';
        }

        if (parseFloat(left) >= 6560 && parseFloat(left) <= 6590 && parseFloat(top) < 270) {
          console.log("saut sur le gros bloc 20");
          var top = 269;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 6600 && parseFloat(left) <= 6620 && parseFloat(top) < 235) {
          console.log("saut sur le gros bloc 21");
          var top = 234;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 6630 && parseFloat(left) <= 6660 && parseFloat(top) < 199) {
          console.log("saut sur le gros bloc 22");
          var top = 198;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 6670 && parseFloat(left) <= 6700 && parseFloat(top) < 163) {
          console.log("saut sur le gros bloc 23");
          var top = 162;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 6710 && parseFloat(left) <= 6780) {
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }


        // descente sur 2e etage
        if (parseFloat(left) >= 780 && parseFloat(left) <= 810 && parseFloat(top) < 127) {
          console.log("saut sur bloc haut 1");
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }  

        if (parseFloat(left) >= 2850 && parseFloat(left) <= 3130 && parseFloat(top) < 127) {
          console.log("saut sur bloc haut 2");
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 3240 && parseFloat(left) <= 3390 && parseFloat(top) < 127) {
          console.log("saut sur bloc haut 3");
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 3880 && parseFloat(left) <= 3920 && parseFloat(top) < 127) {
          console.log("saut sur bloc haut 4");
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 4310 && parseFloat(left) <= 4420 && parseFloat(top) < 127) {
          console.log("saut sur bloc haut 5");
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }

        if (parseFloat(left) >= 4560 && parseFloat(left) <= 4710 && parseFloat(top) < 127) {
          console.log("saut sur bloc haut 6");
          var top = 127;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '100px';
        }


        // descente sous 2e etage
        if (parseFloat(left) >= 780 && parseFloat(left) <= 810 && parseFloat(top) >= 172 && parseFloat(top) <= 271) {
          console.log("saut sous bloc haut 1");
          var top = 270;
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
        }


        // correction saut dernier block
        if (parseFloat(left) >= 7060 && parseFloat(left) <= 7100 && parseFloat(top) == 377) {
          window.document.body.children[0].children[0].children[0].style.top = top + 'px';
          limiteSaut = '200px';
        }


      break;
      }
    }

    timer();
}

// setinterval pour les regles
var timer = function () {
  window.document.body.children[2].style.display = "block";
  var intervalRegle = setTimeout(function() {
    window.document.body.children[2].style.display = "none";
    // if (closeInterval == true) {
    //   console.log('j\'ai bien clearinterval');
    //   clearTimeout(intervalRegle);
    // }
  }, 15000);
}

var closeRegle = function () {  
  // alert('je suis la');
  // var closeInterval = true;
  var close1 = window.document.getElementById('texte');
  close1.style.display = "none";
  // return closeInterval;
}

var mort = function () {
  document.location.reload();
}