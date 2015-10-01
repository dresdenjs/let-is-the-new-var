var getDocumentsForRelatedId = function(id, topic, skip, limit) {
  skip = skip || true;
  limit = limit || 20;
  console.log('ID: %s, topic: %s skip: %s, limit: %d', id, topic, skip ? 'true' : false, limit);
};

getDocumentsForRelatedId(100, 'JavaScript', false, 100);
getDocumentsForRelatedId(100, 'JavaScript');