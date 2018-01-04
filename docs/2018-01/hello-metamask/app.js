function signMetaMask() {
  var text = 'Hello, MetaMask!';
  var msg = web3.toHex(text);
  var from = web3.eth.accounts[0];
  var params = [msg, from];
  var method = 'personal_sign';

  web3.currentProvider.sendAsync({ method: method, params: params, from: from }, function(error, result) {
    if (error) {
      console.error(error);
      return;
    }

    if (result.error) {
      console.error(result.error)
      return;
    }

    console.log(result.result);
  })
}

$(function() {
  if (typeof web3 === 'undefined') {
    console.log('No web3? You should consider trying MetaMask!');
    return;
  }

  window.web3 = new Web3(web3.currentProvider);

  web3.version.getNetwork(function(error, networkId) {
    var networkName;

    switch (networkId) {
      case '1':
        networkName = 'Mainnet';
        break;
      case '2':
        networkName = 'Morden';
        break;
      case '3':
        networkName = 'Ropsten';
        break;
      case '4':
        networkName = 'Rinkeby';
        break;
      case '42':
        networkName = 'Kovan';
        break;
      default:
        console.log('This is an unknown network.');
    }

    if (networkName !== 'undefined') {
      $('.network').text('This is ' + networkName + ' network.');
    }
  });

  if (typeof web3.eth.accounts[0] === 'undefined') {
    $('.account').text('Your MetaMask account is locked. Please unlock and reload this page.');
    return;
  }

  $('.sign-button').text('Sign').css({ cursor: 'pointer', padding: '5px 10px', border: '1px solid #999' }).on('click', signMetaMask);
});
