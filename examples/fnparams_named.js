var getDocumentsForRelatedId = function({id, topic, skip = true, limit = 20}) {
  console.log('ID: %s, topic: %s skip: %s, limit: %d', id, topic, skip ? 'true' : false, limit);
};

getDocumentsForRelatedId({id:100, topic:'JavaScript', skip:false, limit:100});
getDocumentsForRelatedId({topic:'JavaScript', id:200});