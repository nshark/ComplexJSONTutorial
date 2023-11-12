import React from "react";

export default function Colors({data}) {
  if (data.length != 0) {
    return (
      <>
        {data && data.map((d) => {
          return (
            <div className="card" key={d.id} style={{ background: d.color }}>
              <div className="container">
                <h4>
                  <b>{d.name}</b>
                </h4>
                <p>{d.color}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return (<></>);
  }
}
