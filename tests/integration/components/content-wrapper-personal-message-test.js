import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-wrapper-personal-message', 'Integration | Component | content wrapper personal message', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{content-wrapper-personal-message}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#content-wrapper-personal-message}}
      template block text
    {{/content-wrapper-personal-message}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
