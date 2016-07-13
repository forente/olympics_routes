var router = require('express').Router();

var judo = [ {name: 'Colton Brown', origin: 'Piscataway, NJ'},
            {name: 'Angelica Delgado', origin: 'Miami, FL'},
            {name: 'Nick Delpopolo', origin: 'Davie, FL'},
            {name: 'Kayla Harrison', origin: 'Middletown, OH'},
            {name: 'Marti Malloy', origin: 'Oak Harbor, WA' },
            {name: 'Travis Stevens', origin: 'Tacoma, WA'}];
// console.log(randoJudo);

var badminton = [ {name: 'Phillip Chew', origin: 'Orange, CA'},
                  {name: 'Eva Lee', origin: 'Diamond Bar, CA'},
                  {name: 'Paula Lynn Obanana', origin: 'West Covina, CA'},
                  {name: 'Sattawat Pongnairat', origin: 'Orange, CA'},
                  {name: 'Howard Shu', origin: 'Anaheim, CA'},
                  {name: 'Jamie Subandhi', origin: 'Westminster, CA'},
                  {name: 'Iris Wang', origin: 'Arcadia, CA'}];
// console.log(randoBadminton);

var archery = [{name: 'Mackenzie Brown', origin: 'Flint, TX'},
              {name: 'Brady Ellison', origin: 'Globe, AZ'},
              {name: 'Zach Garrett', origin: 'Wellington, MO'},
              {name: 'Jake Kaminski', origin: 'Gainesville, FL'}];

var diving = [{name: 'David Boudia', origin: 'West Lafayette, IN'},
              {name: 'Kassidy Cook', origin: 'The Woodlands, TX'},
              {name: 'Amy Cozad', origin: 'Indianapolis, IN'},
              {name: 'Sam Dorman', origin: 'Tempe, AZ'},
              {name: 'Michael Hixon', origin: 'Amherst, MA'},
              {name: 'Kristian Ipsen', origin: 'Clayton, CA'},
              {name: 'Steele Johnson', origin: 'Carmel, IN'},
              {name: 'Abby Johnston', origin: 'Upper Arlington, OH'},
              {name: 'Jessica Parratto', origin: 'Bloomington, IN'},
              {name: 'Katrina Young', origin: 'Seattle, WA'}];

var tableTennis = [{name: 'Yijun Feng', origin: 'Atlanta, GA'},
                  {name: 'Kanak Jhan', origin: 'Milpitas, CA'},
                  {name: 'Timothy Wang', origin: 'Houston, TX'},
                  {name: 'Jennifer Wu', origin: 'Fort Lee, NJ'},
                  {name: 'Lily Zhang', origin: 'Palo Alto, CA'},
                  {name: 'Jiaqi Zheng', origin: 'Fremont, CA'}];



router.use('/judo', function(request, response){
  response.send(judo);
})
router.use('/badminton', function(request, response){
  response.send(badminton);
})
router.use('/archery', function(request, response){
  response.send(archery);
})
router.use('/diving', function(request, response){
  response.send(diving);
})
router.use('/tableTennis', function(request, response){
  response.send(tableTennis);
})


module.exports = router;
