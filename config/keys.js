'use strict';

//dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

let dbPassword = 'mongodb+srv://rtaggo:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@rtaggocluster-f2nqm.mongodb.net/test?retryWrites=true';

module.exports = {
  mongoURI: dbPassword
};
