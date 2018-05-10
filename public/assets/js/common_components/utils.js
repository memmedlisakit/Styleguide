export function makeid(length = 5) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let i;

  for (i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export function parseResponse(response) {
  const json = response.json();
  if (!response.ok) {
    return json.then( err => { throw err; });
  }
  return json;
}

export function currency(amount, currency) {

  if (!currency.code) {
    return amount;
  }

  if (currency.sign.length) {
    return `${currency.sign}${amount}`;
  } else {
    return `${amount} ${currency.code}`;
  }

}

export function getMetaContent(name) {
  var metas = document.getElementsByTagName('meta');

  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") == name) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
}
