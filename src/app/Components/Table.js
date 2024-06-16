import React from "react";
import { withCookies } from "react-cookie";

const Table = (props) => {
  const { cookies } = props;

  const p = cookies.get("temp");
  let value = p;
  let a = [];
  let b = [];
  let c=[];
  let e=[];

  var d = require("@/app/Prices.json");
  for (let i = 0; i < d.length; i++) {
    let obj = d[i];
    let l = obj.Model;
    if (l.localeCompare(p) === 0) {
      a.push(obj.Price);
      b.push(obj.CurrentPrice);
      c.push ( obj.img); 
      e.push(obj.weburl);
    }
  }

  let len = a.length;

  let min = 0;
  let max = 0;
  let x = "";
  for (let j = 0; j < len; j++) {
    if (a[j] <= a[min]) {
      min = j;
    }
    if (a[j] >= a[max]) {
      max = j;
    }
  }
  console.log(a[max],a[min]);

  window.location.href = "#/Resultp";

  if (b[0] === a[min]) {
    x = "Best Deal";
  } else if (b[0] < a[min] + 0.5 * (a[max] - a[min])) {
    x = "Good Deal";
  } else {
    x = "Bad Deal";
  }

  return (
    <div className="relative overflow-x-auto flex items-center justify-center p-8">
      <table className="w-6xl text-base text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-8">
              Product Image
            </th>
            <th scope="col" className="px-16 py-8">
              Product Name
            </th>
            <th scope="col" className="px-6 py-8">
              Current Price
            </th>
            <th scope="col" className="px-6 py-8">
              Lowest Price
            </th>
            <th scope="col" className="px-6 py-8">
              GoodDeal/BadDeal
            </th>
            <th scope="col" className="px-6 py-8">
              Website Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">
              <img src={c[0]} alt={p} className="h-32 w-24 object-co" />
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {p}
            </th>
            <td className="px-12 py-4">{b[0]}</td>
            <td className="px-12 py-4">{a[min]}</td>
            <td className="px-12 py-4">{x}</td>
            <td className="px-8 py-4">
              <a href={e[0]} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Visit Site
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withCookies(Table);
