var _retrieveAllIdsFromCache = function() {
  var results = [];
  this._cache.keys().forEach(id => {
    //do not return special all entity
    if (id !== 'all') {
      var cacheValue = this._cache.get(id);
      if (angular.isDefined(cacheValue)) {
        results.push(cacheValue);
      }
    }
  });
  //because we cache the raw data, we need to transform it accordingly
  return this.model.transformResponse(results);
};