'use strict';

var simpleTemplate = function simpleTemplate(name, label) {
  return '<div class="nm-input nm-input-text"\n    ng-class="{ disabled: disabled }">\n    <label for="input-' + name + '"> ' + label + '  </label>\n    <input id="input-' + name + '"\n    ng-disabled="disabled"\n    type="text"\n    name="' + name + '"\n    ng-maxlength="ngMaxlength"\n    ng-minlength="ngMinlength"\n    ng-required="ngRequired"\n    ng-change="ngChange"\n    ng-model="ngModel" />\n    <div class="form-input-warning" ng-messages="$parent.' + name + '.$error"\n    ng-messages-include="scripts/modules/errorHandling/views/defaultValidationErrorMessages.view.html">\n    </div>\n    </div>';
};

console.log(simpleTemplate('price', 'Preis'));
