const  startValue = document.getElementById("startValue");
const endValue = document.getElementById("endValue");
const btn = document.getElementById("btnSubmit");
const result = document.getElementById("results");

btn.addEventListener("click", displayValues);


function getValues()
{
  let start = startValue.value;
  let end = endValue.value;

  // Convert to integers
  start = parseInt(start);
  end = parseInt(end);

  let valuesRange = [];

  for (let i = start; i <= end; i++)
  {
    valuesRange.push(i);
  }

  return valuesRange;
}


function displayValues()
{
  let numbers = getValues();

  let className = "";

  for (let i = 0; i < numbers.length; i++)
  {
    if (numbers[i] % 2 == 0)
    {
      className = "even";
    } else {
      className = "odd";
    }
    result.innerHTML += `<tr><td class="${className}">${numbers[i]}</td></tr>`;
  }
}
