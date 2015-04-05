/**
 * Module dependencies.
 */
var _ = require('ember');
var select = require('ember-select');


module.exports = Em.Mixin.create(select, {
  tagName: 'input',
  attributeBindings: ['type', 'active:checked', 'name'],
  type: 'radio',
  // onchange: function() {
  // this.send('click');
  // }.on('change'),
});
