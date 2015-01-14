var bookshelf = require('../lib/db').bookshelf;

var Balance = require('./balance');
var Contract = require('./contract');

var Token = bookshelf.Model.extend({
  tableName: 'tokens',
  balance: function () {
    return this.hasOne(Balance.model);
  },
  contract: function () {
    return this.belongsTo(Contract.model);
  }
});

exports.model = Token;
