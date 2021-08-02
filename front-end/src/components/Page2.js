import ComboChart from "../components/ComboChart";
import PieChart from "../components/PieChart";

const Page2 = () => {
  return (
    <div>
      <table border="2" style={{margin: '15px'}}>
        <tr>
          <th style={{padding: '5px', textAlign: 'center'}}>
          Total Dollars spend by customer over three years
          </th>
          <th style={{padding: '5px', textAlign: 'center'}}>
          Average Spend per transaction for household over three years
          </th>
          <th style={{padding: '5px', textAlign: 'center'}}>
          Total Number of transactions from 2018 -2020
          </th>
          <th style={{padding: '5px', textAlign: 'center'}}>
          Region wise highest Spend
          </th>
          <th style={{padding: '5px', textAlign: 'center'}}>
          Highest spent by customers in a year
          </th>
        </tr>
        <tr>
          <td style={{textAlign: 'center'}}>
          5344201.24
          </td>
          <td style={{textAlign: 'center'}}>
          5.796 dollars
          </td>
          <td style={{textAlign: 'center'}}>
          922012
          </td>
          <td style={{textAlign: 'center'}}>
          East
          </td>
          <td style={{textAlign: 'center'}}>
          Year 2019 - $2572864.42 
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <ComboChart />
          </td>
          <td>
            <PieChart />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Page2;
