const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};
const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};
async function main() {
  setInterval(() => {
    let last = document.body.lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.length.slice(
        0,
        last.innerHTML.length - 3
      );
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 300);

  let text = [
    "Initializied Hacking now reading your data",
    "Reading your files",
    "Password File Detected",
    "Sending all password and personal file to the server",
    "Cleaning up",
  ];
  for (const item of text) {
    await addItem(item);
  }
}
main();
