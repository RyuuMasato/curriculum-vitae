import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('content-wrapper-contact-information', 'Integration | Component | content wrapper contact information', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{content-wrapper-contact-information}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#content-wrapper-contact-information}}
      template block text
    {{/content-wrapper-contact-information}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
