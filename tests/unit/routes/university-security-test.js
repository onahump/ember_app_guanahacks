import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | universitySecurity', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:university-security');
    assert.ok(route);
  });
});
