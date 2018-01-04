$(function() {
  if (typeof web3 === 'undefined') {
    console.log('No web3? You should consider trying MetaMask!');
    return;
  }

  window.web3 = new Web3(web3.currentProvider);

  web3.version.getNetwork(function(err, netId) {
    var networkName;

    switch (netId) {
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
    $('.account').text('Your MetaMask account is locked. Please unlock and reload this page.')
  }
});
