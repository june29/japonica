function handleResult(error, result) {
  if (error) {
    console.error(error);
    return;
  }

  if (result.error) {
    console.error(result.error)
    return;
  }

  console.log(result.result);
}

function signMetaMask() {
  var text = 'Hello, MetaMask!';
  var msg = web3.toHex(text);
  var from = web3.eth.accounts[0];
  var params = [msg, from];
  var method = 'personal_sign';

  web3.currentProvider.sendAsync({ method: method, params: params, from: from }, handleResult);
}

function sendETH() {
  var to = '0xc66d779B340E333bA696B2b3687FB4Bca1Eb7D0b';
  var from = web3.eth.accounts[0];
  var value = web3.toWei(0.001, 'ether');
  var params = [{ to: to, from: from, value: value }];
  var method = 'eth_sendTransaction';

  web3.currentProvider.sendAsync({ method: method, params: params, from: from }, handleResult);
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

  $('.button').css({ cursor: 'pointer', padding: '5px 10px', border: '1px solid #999' });

  $('.sign-button').text('Sign').on('click', signMetaMask);
  $('.send-button').text('Send').on('click', sendETH);
});
