// barebones nlp index.js by Jiro
// generally follows https://github.com/axa-group/nlp.js's example

const { containerBootstrap, Nlp, LangEn } = window.nlpjs;
// var async = require('asyncawait/async');

 ( async() => { 
  const container = await containerBootstrap();
  container.use(Nlp);
  container.use(LangEn);
  const responder = container.get('nlp');
  responder.settings.autoSave = false;
  responder.addLanguage('en');

  responder.addDocument('en', 'hello there', 'greetings.hello');
  responder.addDocument('en', 'how are you', 'greetings.hello');
  responder.addDocument('en', 'uwu', 'greetings.hello');
  responder.addDocument('en', 'howdy', 'greetings.hello');
  responder.addDocument('en', 'sayonara', 'greetings.bye');
  responder.addDocument('en', 'see you later', 'greetings.bye');

  responder.addAnswer('en', 'greetings.hello', 'general kenobi');
  responder.addAnswer('en', 'greetings.hello', 'gutentag. I think its German');

  await responder.train();
  const reply = await responder.process('en', 'I should go');
  console.log(reply);
})();