/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('vcfirms', function () {
	return Vcfirms.find();
});
Meteor.publish('raised', function () {
	return Raised.find();
});