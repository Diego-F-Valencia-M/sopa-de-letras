// An array with the words to show
            var words = ['Caimán', 'Alpaca', 'Hormiga', 'Mono', 'Armadillo', 'Burro',
               'Tejón', 'Murciélago', 'Castor', 'Abeja', 'Jabali',
               'Búfalo', 'Mariposa', 'Camello', 'Gato',
               'Guepardo', 'Pollo', 'Coyote', 'Cangrejo', 'Perro',
               'Paloma','Elefante','Hurón','Zorro','Rana',
               'Jirafa','Cabra','Ganso','Gaviota','Hámster','Garza', 'Pulpo',
               'Avestruz', 'Nutria', 'Búho', 'Loro', 'Cerdo',
               'Cuervo', 'Escorpión', 'Tiburón', 'Tigre',
               'Ballena'
           ];

           console.log(words.length)

            // Start a basic word game without customization !
            var gamePuzzle = wordfindgame.create(words, '#puzzle-container', '#puzzle-words');

            $("#solveBTN").click(function(){
                // Solve the puzzle !
                var result = wordfindgame.solve(gamePuzzle, words);
                console.log(result);
            });