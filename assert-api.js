import assert from 'node:assert';

const assertionError = new assert.AssertionError({
  actual: '1',
  expected: 1,
  operator: 'strictEqual',
});

const tracker = new assert.CallTracker();

tracker.calls(x => x, 1)();

tracker.report();

tracker.verify();

assert(true);

assert.deepEqual({ x: 1 }, { x: '1' });

assert.deepStrictEqual({ x: 1 }, { x: 1 });

assert.doesNotMatch('1', /[a-z]/);

assert.doesNotReject(Promise.resolve());

assert.doesNotThrow(x => x);

assert.equal(1, '1');

// assert.fail();

assert.ifError(null);

assert.match('1', /\d/);

assert.notDeepEqual({ x: 1 }, { x: 2 });

assert.notDeepStrictEqual({ x: 1 }, { x: '1' });

assert.notEqual(1, 2);

assert.notStrictEqual('1', 1);

assert.ok(true);

assert.rejects(Promise.reject());

assert.strictEqual(1, 1);

assert.throws(() => { throw assertionError; });
