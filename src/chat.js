export function queryConversation() {
  return fetch("https://chat-app-nysybcalra-uc.a.run.app/api/conversation")
    .then(response => response.json())
    .then(data => data.conversation);
}

export function postMessage(who, what) {
  return fetch("https://chat-app-nysybcalra-uc.a.run.app/api/say", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ iam: who, saying: what })
  });
}