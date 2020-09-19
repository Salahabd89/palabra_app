var lda = require('lda');
var nlp = require('compromise');
var posTagger = require( 'wink-pos-tagger' );



async function getTopics(req, res) {

    let document = req.query[0];

    var documents = document.match( /[^\.!\?]+[\.!\?]+/g );

    var result = lda(documents, 4, 10);

    var tagger = posTagger();
  // Tag the sentence using the tag sentence api.
    var tags = tagger.tagSentence( document);

    useTags = []
    tags.map(function (data,i){
      if (['NNP','VBG','NN'].indexOf(data.pos) >= 0)
      {
         useTags.push(data.value)
      }
    })
    res.send({result})
  }

  module.exports = {
    getTopics: getTopics
  }


