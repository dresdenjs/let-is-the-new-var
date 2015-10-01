var simpleTemplate = function(name, label) {
  return `<div class="nm-input nm-input-text"
    ng-class="{ disabled: disabled }">
    <label for="input-${name}">${label}</label>
    <input id="input-${name}"
    ng-disabled="disabled"
    type="text"
    name="${name}"
    ng-maxlength="ngMaxlength"
    ng-minlength="ngMinlength"
    ng-required="ngRequired"
    ng-change="ngChange"
    ng-model="ngModel" />
    <div class="form-input-warning" ng-messages="$parent.${name}.$error"
    ng-messages-include="scripts/modules/errorHandling/views/defaultValidationErrorMessages.view.html">
    </div>
    </div>`;
};

console.log(simpleTemplate('price', 'Preis'));