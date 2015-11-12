var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                 xxx            ",
   "                                                  xx      xx    xx!xx           ",
   "                                            xx                  x!!!x           ",
   "                                                                xx!xx           ",
   "                                   xxxx                          xvx            ",
   " @                                                                              ",
   "xxx                                                                             ",
   "  x                                                                             ",
   "  x                                      xxxx                              o    ",
   "  x          xxxx                                                               ",
   "  x          x  x                                                               ",
   "  x         xx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx               xxxxxxxxxxx",
   "  x!!!!!!!!!x                 x   x                  x!!!!!!!!!!!!!!!x          ",
   "  x!!!!!!!!!x                 x!!!x                  x!!!!!!!!!!!!!!!x          ",
   "  x!!!!!!!!!x                 x!!!x                  x!!!!!!!!!!!!!!!x          ",
   "  xxxxxxxxxx                  xxxxx                  xxxxxxxxxxxxxxxxx          ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                xx!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x               !                               x!x  ",
   "                                                xx!x         x               !                              xx!x  ",
   "                                                 x!x         x               !                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x     !                x!!!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx                                     ",
   "                                                               xxxx!!!!!xxxx      xx                              ",
   "                                               x     x            xxxxxxx          x                              ",
   "                                               x     x                             x                              ",
   "                                               x     x                             x         xxx                  ",
   "                                               x     x                            xxx        x x                  ",
   "                                               xx    x                             x        xx x            x     ",
   "                                               x     x               x   x         x         x x            x     ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x xxx        xxx     ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x x=    o      x     ",
   "             xx       xx        x   x          x    xx               x   x   x   !           x xxxxxxxxxxxxxx     ",
   "     @       x         x        x   x          x     x              xx   x   x   !           x                    ",
   "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx   xx         x     x               x           x x         x                    ",
   "    x x      x         xxxxxxxxx     xx!!!!!!!!xx    x               x     =     x x         x                    ",
   "    x x!!!!!!x                x        xxxxxxxxx     x       xxxxxxxxxxxxxxxxxxxxx xx       xx                    ",
   "                                                    xx      xx !                    xx     xx                     ",
   "                                                   xx      xx  !                     xxxxxxx                      ",
   "   xxxxxxxxxxxxxxxxxxxxx!!!!!xx!!!!!!!xxxxxxxxxxxxxx      xx   !                                                  ",
   "                                                         xx    !                                                  ",
   "                                                       xx     !                                                  ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                          "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                       xox                                                                    ",
   "                                       xox                 !!!        !!!  xxx                                ",
   "                                       xox                 !x!        !x!                                     ",
   "                                     xxxoxxx                x          x                                      ",
   "                                      x o x                 x   o      x       xxx                            ",
   "                                xx    x   x  xx             x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x  =   x                                                ",
   "                                      x   xxxxxxxxx!!!xxxxxxxx              x x                               ",
   "                                xx    x   x      =    x                    x!!!x                              ",
   "                                      x   x  =    =   x                     xxx                               ",
   "                                     xx   xx      =   x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                xx    x   x  =        x           x!!!x                                       ",
   "                                      x   x    = = = =x            xxx       xxx                              ",
   "                                     xx   xx  =   =   x    !!!              x!!!x                             ",
   "                                      x   x    === =  x    !x!               xxv        xxx                   ",
   "                                      x   x  = = = =  x   =       =  x                 x!!!x                  ",
   "                             xxx xxx xxx xxx          x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x x x x =   =   =x!!!!!!!!!!!!!!x                                        ",
   "                             x       x     x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx      x     x                                         xxx                      ",
   "  xxx                         x     xx                                              x!!!x                xxx  ",
   "  x x                         x    xxx                                            xxxxxx                 x x  ",
   "  x                           x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x xx                            x  ",
   "  x                           !x          x       |xxxx|    |xxxx|     xxx xxxxx                           x  ",
   "  x                xxx        !x          x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x                xxx        xxxxxx      x                             x x        xxx          xxx        x  ",
   "  x                xxx      xxxxxxxxxx    x  x    x    x    x    x   xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x!!!!x!!!!x!!!!x!!!!x!!!!xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxx                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                    x                    xx                                                                   ",
   "                    xxxxxxxxxxxxxxxxxxxxxxx                                                                   "],
  ["       x     x                                                                                                ",
   "       x  @  x                                                                                                 ",
   "       x     x                                                                                                ",
   "       x     x                                                                                                ",
   "       !     !                                                                                                ",
   "       x     x                                                                                                ",
   "       x     x                                                                                                ",
   "       x     x                                                                                                ",
   "       !     !                                                                                                ",
   "       x     x                                                                                                ",
   "       x     x                                                                                                ",
   "       x     x                                                                                                ",
   "       !     !                                                                                                ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "             xxx         xxx         xxx                                                                      ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x   xxxxxxxxx   xxxxxxxxx   xx                                                                    ",
   "  x         x   x       x   x       x   x                                                                     ",
   "  x         xxxxx       xxxxx       xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
