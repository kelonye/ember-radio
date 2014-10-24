require('ember');
var select = require('ember-select');

module.exports = Em.Mixin.create(select, {
  tagName: 'input',
  attributeBindings: ['type', 'active:checked', 'name'],
  type: 'radio',
  change: function(e) {
    this._super(e);
    this.click(e);
  }
});
