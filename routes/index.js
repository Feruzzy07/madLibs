var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*POST form data*/
router.post('/story', function(req,res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})
module.exports = router;

function getStory(formData) {
  if(formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if(formData.storyChoice === "2"){
    return generateStory2(formData);
  }else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  }else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `Today I am visiting Efren with ${formData.person1}.
As we rode in our ${formData.vehicle} we see Efren’s house in the distance.
We see that his ${formData.noun1} is in his front yard.
His ${formData.adjective1} ${formData.color1} house is the ${formData.adjective2} in the neighborhood.
As ${formData.person2} lets us in we go to Efren’s room.
We bust into his room all ${formData.adjective3} as we see that he is ${formData.verb1} and we are in shock.
His room is ${formData.adjective4} with ${} ${words[11]} all over the place.
As we left, Efren gave us ${words[18]} as a goodbye gift, and then we went to ${formData.verb3}`
}

function generateStory2(formData){
  return `Twas a cold and wintery ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}

function generateStory3(formData){
  return `Twas a rainy and cold ${formData.noun1}. The ${formData.adjective1} pumpkins started to ${formData.verb1}!`
}
