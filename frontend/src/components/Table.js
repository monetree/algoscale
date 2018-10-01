import React from 'react';

const Table = ({data}) => {
        return (
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <thead>
                  <tr>

                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">PERatioTTM</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ExDividendDate</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ticker_company</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">EPSTTM</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ftWeekRange</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">OneyTargetEst</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">PreviousClose</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Ticker</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ForwardDividendYield</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Industry</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Volume</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Open</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Beta</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">AvgVolume</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Company</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Ask</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">DaysRange</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">MarketCap</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Bid</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">EarningsDate</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                {
              data.map((user,i) => {
                return (
                <tr>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].PERatioTTM}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].ExDividendDate}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].ticker_company}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].EPSTTM}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].ftWeekRange}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].OneyTargetEst}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].PreviousClose}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Ticker}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].ForwardDividendYield}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Industry}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Volume}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Open}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Beta}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].AvgVolume}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Company}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Ask}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].DaysRange}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].MarketCap}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].Bid}</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{data[i].EarningsDate}</th>
                </tr>
                    );
                })
              }
                </tbody>
              </table>
            </div>
          </div>
        );
    }





export default Table;
