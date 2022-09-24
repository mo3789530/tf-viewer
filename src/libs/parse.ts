interface Symbol {
  [key: string]: string;
}

interface NestedSymbol {
  [key: string]: boolean;
}

const TF_PREFIX: Symbol = {
  "+": "tf-result-add",
  "-": "tf-result-destory",
  "~": "tf-result-update",
};

const NEST_OPEN_TOKEN: NestedSymbol = {
  "[": true,
  "{": true,
};

const NEST_CLOSE_TOKEN: NestedSymbol = {
  "]": true,
  "}": true,
};

export const parse = (input: string) => {
  const inputArray = input.split("/n");
  let isBlock = false;

  let nesttedCSS: Array<string> = new Array<string>();
  const parsedInput = inputArray.map((line) => {
    const prefix = getPrefix(line);
    const suffix = getSuffix(line);
    if (
      !isBlock &&
      !prefix &&
      !suffix &&
      /(will|must) be/.test(line) &&
      !nesttedCSS.length
    ) {
        isBlock = true;
    } 
    else if (isBlock && prefix == "#" && /(will|must) be/.test(line)) {
      isBlock = false;
      return "</div>"
    }
    else if(!prefix && !suffix && !nesttedCSS.length) {
        isBlock = false;
    }

    // Title CSS
    if (prefix === "#" && /(will|must) be/.test(line)) {
      return titleHtml(line);
    }

    let cssClass: string | undefined = "";

    if (line == "") return "";

    // Get body CSS
    if (isBlock) {
      if (/resource /.test(line)) {
        cssClass = "tf-result--resource-info";
      } else {
        cssClass = TF_PREFIX[prefix];
      }
      if (NEST_OPEN_TOKEN[suffix]) {
        nesttedCSS.push(cssClass);
      } else if (NEST_CLOSE_TOKEN[prefix]) {
        cssClass = nesttedCSS.pop();
      }
      if (cssClass == undefined) return "";
      return `<pre class="tf-result ${cssClass}">${line}</pre>`;
    }
    return "";
  });
  return parsedInput.join("");
};

function getPrefix(input: string) {
  for (let index = 0; index < input.length; index++) {
    const c = input.charAt(index);
    if (c != " ") {
      return c;
    }
  }
  return "";
}

function getSuffix(input: string) {
  for (let index = input.length - 1; index >= 0; index--) {
    const c = input.charAt(index);
    if (c != ",") {
      return c;
    }
  }
  return "";
}

function titleHtml(input: string) {
  let cssClass = "";
  let wrapperClass = "";
  switch (true) {
    case /(will|must) be created/.test(input):
      cssClass = "tf-title tf-title--create";
      wrapperClass = "tf-div";
      break;
    case /(will|must) be update in-place/.test(input):
      cssClass = "tf-title tf-title--update";
      wrapperClass = "tf-div";
      break;
    case /(will|must) be destroyed/.test(input):
      cssClass = "tf-title tf-title--destroy";
      wrapperClass = "tf-div";
      break;
    default:
      wrapperClass = "tf-div";
      break;
  }
}