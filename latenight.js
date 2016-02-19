// Why I'm happy at midnight.

function futureHappy() {
  var //today = new Date().toDateString().split(" ")[0],
      yum = {
        name: 'Golden_Steamer',
        menu: ['veggieBao', 'jumboBao', 'porkBao', 'porkVeggieBao', 'pumpkinBao']
      },
      me = {
        name: 'randomRecurser',
        eyes: {size: 9},
        stomach: {size: 5},
        forget: function(something) { window.alert('TUESDAY: If only I had a bao :\('); },
        discover: function(something) {
          window.alert('THURSDAY: Holy Cow! There are ' + something + ' in here!')
        },
        fellowship: function() { return 'Anyone for Golden Steamer? Y/N' },
        leftovers: function() { window.alert('Food for days! I\'ll put the ' +
          'rest in the fridge for later!') }
      },
      eyes = me.eyes.size,
      stomach = me.stomach.size,
      myLunch,
      inFridge;

  function order(menu) {
    var delusion = eyes - Math.round(Math.random() * stomach),
        inthebag = [];
    while(delusion > 0) {
      inthebag.push(menu[Math.floor(Math.random() * menu.length)]);
      delusion--;
    }
    return inthebag;
  }

  function eat(food, Thursday) {
    var stomachNow = stomach;
    while(stomachNow < eyes) {
      food.pop(); 
      stomachNow++;
    } 

    if(stomachNow == eyes && food.length) {
      inFridge = food;
      if(Thursday) alert('Leftovers, what a treat!');
      } else alert('grumble grumble. I ran out of bao!!'); 
  }

  // Monday
  var atTheDoor = me.fellowship()
  if(prompt('MONDAY: ' + atTheDoor).match(/y(es)?/i)) {
    myLunch = order(yum.menu);
    eat(myLunch);
    if(inFridge) me.leftovers();
    // Tuesday & Wednesday
    me.forget(inFridge);
    // Thursday
    if(inFridge) {
      me.discover(inFridge);
      eat(inFridge, true);
    }
    // Monday again
    if(prompt('Should we be happy again next week? Y/N').match(/y(es)?/i)) {
      futureHappy();
    }
  }
}

futureHappy();