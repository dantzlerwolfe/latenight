// Why I'm happy at midnight.

function futureHappy() {
  var //today = new Date().toDateString().split(" ")[0],
      yum = {
        name: 'Golden_Steamer',
        menu: ['veggieBao', 'jumboBao', 'porkBao', 'porkVeggieBao', 'pumpkinBao']
      },
      me = {
        name: 'randomRecurser',
        stomach: {size: 5},
        forget: function(something) { window.alert('TUESDAY: If only I had a bao :\('); },
        discover: function(something) {
          window.alert('THURSDAY: Holy Cow! There are ' + something + ' in here!')
        },
        fellowship: function() { return 'Anyone for Golden Steamer? Y/N' },
        leftovers: function() { window.alert('Food for days! I\'ll put the ' +
          'rest in the fridge for later!') }
      },
      stomach = me.stomach.size * .8 * (1 + Math.random() * .5),
      myLunch,
      inFridge;

  function order(menu) {
    var eyes = 2 * Math.random() * stomach,
        inthebag = [];
    while(inthebag.length < eyes) {
      inthebag.push(menu[Math.floor(Math.random() * menu.length)]);
    }
    return inthebag;
  }

  function eat(food, Thursday) {
    var stomachNow = 0;
    while(stomachNow < stomach && food.length) {
      food.pop(); 
      stomachNow++;
    } 

    if(Thursday) { alert('Leftovers, what a treat!');
      } else if(stomachNow - 1 <= stomach && food.length) {
          inFridge = food; 
        } else alert('grumble grumble. I ran out of bao!!'); 
  }

  // Monday
  if(prompt('MONDAY: ' + me.fellowship()).match(/y(es)?/i)) {
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
    if(prompt('Should try for happiness again next week? Y/N').match(/y(es)?/i)) {
      futureHappy();
    }
  }
}

futureHappy();