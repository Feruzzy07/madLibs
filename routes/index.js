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
  return `My name is ${formData.person1} and I am ${formData.number1} years old. This is my story of how my ${formData.adjective1} ${formData.noun3} made my life.
   It was a nice day with the nice bright ${formData.color1} sky. I was walking home after I saw the ${formData.noun1} at school. 
   I sat down to eat some ${formData.food1}. While eating I saw a ${formData.noun2} and quickly started ${formData.verb1} as I left.
    While leaving I dropped my ${formData.clothing1}. I cried when I got home after I noticed I left my ${formData.adjective2} ${formData.clothing1}.
    I walked to my room and saw my picture of ${formData.famousperson1} torn up into ${formData.number2} pieces. I called ${formData.person2} and 
  told them that ${formData.noun3} jumping up and down made my day. ${formData.person3} walked in and told me I got my dream job of ${formData.occupation1}.`
}

function generateStory2(formData){
  return `My name is ${formData.person1} and I am ${formData.number1} years old. This is my story of how my ${formData.adjective1} ${formData.noun3} ate my homework.
   It was a nice day with the nice bright ${formData.color1} sky. I was walking home after I saw the ${formData.noun1} at school. 
   On my way home I took a break and ate ${formData.typeoffood1}. While eating I saw a ${formData.noun2} and quickly started ${formData.verbendingining1} as I escaped.
    While leaving I dropped my ${formData.articleofclothing1}. I cried when I got home after I noticed I left my ${formData.adjective2} ${formData.articleofclothing1}.
    I walked to my room and saw my picture of ${formData.famousperson1} torn up into ${formData.number2} pieces. I called ${formData.personinroom2} and 
  told them that ${formData.noun3} ate my homework. ${formData.personinroom3} walked in and looked at the mess saying I will never be able to apply for ${formData.occupation1}.`
}

function generateStory3(formData){
  return `My name is ${formData.person1} and I am ${formData.number1} years old. This is my story of how I got my ${formData.adjective1} ${formData.noun3} and how it made me happy.
   It was a nice day with the nice bright ${formData.color1} sky. I was walking home after coming back from work after I had just seen a ${formData.noun1} laying on the table.
   On my way home I took a break and ate some ${formData.food1}. While eating I saw a ${formData.noun2} and quickly started ${formData.verb1} as I left the area.
    I was wearing my favorite ${formData.clothing1} and I was feeling great. I cried when I got home as I noticed my ${formData.adjective2} ${formData.clothing1} had stains on it.
    I walked to my room and saw my picture of ${formData.famousperson1} sitting right next to my check of ${formData.number2} dollars. I called ${formData.person2} and 
  told them about my ${formData.noun3}.  I called my boss ${formData.person3} and told them I quit. I will never work as a ${formData.occupation1} ever again.`
}
