var _retrieveAllIdsFromCache = function() {
  var results = [];
  var self = this;
  this._cache.keys().forEach(function(id) {
    //do not return special all entity
    if (id !== 'all') {
      var cacheValue = self._cache.get(id);
      if (angular.isDefined(cacheValue)) {
        results.push(cacheValue);
      }
    }
  });
  //because we cache the raw data, we need to transform it accordingly
  return this.model.transformResponse(results);
};