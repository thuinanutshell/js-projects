let price = 19.5; // Update this as needed for each test

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const unitValues = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

function buildNums(cid) {
  const nums = {};
  for (let [name, amount] of cid) {
    nums[name] = roundToTwo(amount / unitValues[name]);
  }
  return nums;
}

function exchange(inputCash, price, cid) {
  let remaining = roundToTwo(inputCash - price);
  const change = [];
  const nums = buildNums(cid);

  const denominations = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  for (let [name, value] of denominations) {
    let unitsAvailable = nums[name];
    let unitsNeeded = Math.floor(remaining / value);
    let unitsUsed = Math.min(unitsAvailable, unitsNeeded);

    if (unitsUsed > 0) {
      let amountUsed = roundToTwo(unitsUsed * value);
      remaining = roundToTwo(remaining - amountUsed);
      change.push([name, amountUsed]);
    }
  }

  return { change, remaining };
}

purchaseBtn.addEventListener("click", () => {
  const cashValue = parseFloat(cashInput.value);

  if (isNaN(cashValue)) {
    changeDue.innerText = "Please enter a valid amount";
    return;
  }

  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cashValue === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }

  const totalCID = roundToTwo(cid.reduce((sum, [_, amt]) => sum + amt, 0));
  const changeNeeded = roundToTwo(cashValue - price);

  if (changeNeeded > totalCID) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const result = exchange(cashValue, price, cid);

  if (result.remaining > 0) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const changeTotal = roundToTwo(
    result.change.reduce((acc, [_, amt]) => acc + amt, 0),
  );

  if (changeTotal === totalCID) {
    const closedStr = result.change
      .filter(([_, amt]) => amt > 0)
      .map(([name, amt]) => `${name}: $${amt}`)
      .join(" ");
    changeDue.innerText = "Status: CLOSED " + closedStr;
  } else {
    const openStr = result.change
      .map(([name, amt]) => `${name}: $${amt}`)
      .join(" ");
    changeDue.innerText = "Status: OPEN " + openStr;
  }
});
