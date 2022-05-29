function addAndRemoveElements(array = []) {
  let outputArr = [];
  for (let i = 0; i < array.length; i++) {
    const command = array[i];
    if (command === "add") {
      outputArr.push(i + 1);
    } else if (command === "remove") {
      outputArr.pop();
    }
  }
  console.log(outputArr.length > 0 ? outputArr.join("\n") : "Empty");
}

addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove"]);
