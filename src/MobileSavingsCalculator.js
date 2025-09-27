import React, { useState } from "react";

const skuData = [
  { variant: "B&H Gold Blue", ptr: 290.0, schemeSellIn: 23.0 },
  { variant: "B&H Special", ptr: 290.0, schemeSellIn: 23.0 },
  { variant: "ICON", ptr: 70.0, schemeSellIn: 16.5 },
  { variant: "Clove", ptr: 108.0, schemeSellIn: 22.0 },
  { variant: "Connect", ptr: 250.0, schemeSellIn: 25.0 },
  { variant: "Verve", ptr: 160.0, schemeSellIn: 14.0 },
  { variant: "CLASSIC RICH TASTE", ptr: 307.0, schemeSellIn: 6.0 },
  { variant: "ICE BURST", ptr: 300.0, schemeSellIn: 13.0 },
  { variant: "DOUBLE BURST", ptr: 300.0, schemeSellIn: 13.0 },
  { variant: "GFK RED 20's", ptr: 303.0, schemeSellIn: 10.0 },
  { variant: "GFK BLUE 20's", ptr: 303.0, schemeSellIn: 10.0 },
  { variant: "GFK RED SLEEKS", ptr: 290.0, schemeSellIn: 23.0 },
  { variant: "GFK BLUE SLEEKS", ptr: 290.0, schemeSellIn: 23.0 },
  { variant: "GFK SOCIAL 2 POD", ptr: 225.0, schemeSellIn: 50.0 },
  { variant: "GFK SOCIAL Red Line", ptr: 225.0, schemeSellIn: 50.0 },
  { variant: "GFK Mixpod", ptr: 146.5, schemeSellIn: 10.0 },
  { variant: "GFK Twinpod", ptr: 140.0, schemeSellIn: 16.5 },
  { variant: "GF Indie Mint KINGS", ptr: 140.0, schemeSellIn: 16.5 },
  { variant: "GF SMART 2.0", ptr: 75.0, schemeSellIn: 13.0 },
  { variant: "AC Clove mint (Garam)", ptr: 100.0, schemeSellIn: 10.0 },
  { variant: "AC Fresh Mint", ptr: 94.0, schemeSellIn: 15.0 },
  { variant: "AC Smash", ptr: 94.0, schemeSellIn: 14.0 },
  { variant: "NAVYCUT", ptr: 86.5, schemeSellIn: 8.5 },
];

const emptyPackKamaiValues = {
  ICON: 10,
  "GFK RED SLEEKS": 18,
  "GFK BLUE SLEEKS": 18,
  "GFK SOCIAL 2 POD": 18,
  "GFK SOCIAL Red Line": 20,
  "GF Indie Mint KINGS": 10,
  NAVYCUT: 5,
};

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/(\s|-|\()/)
    .map((word) => {
      if (word.trim() === "" || /(\s|-|\()/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

export default function MobileSavingsCalculator() {
  const [quantities, setQuantities] = useState({});

  const packOptions = Array.from({ length: 101 }, (_, i) => i);

  const handleQuantityChange = (variant, value) => {
    const qty = parseInt(value, 10);
    setQuantities((prev) => ({ ...prev, [variant]: isNaN(qty) ? 0 : qty }));
  };

  // TOTALS
  const totalKamai = skuData.reduce((sum, sku) => {
    const qty = quantities[sku.variant] || 0;
    const schemeKamai = qty * sku.schemeSellIn;
    const emptyPackKamaiPerUnit = emptyPackKamaiValues[sku.variant] || 0;
    const emptyKamai = qty * emptyPackKamaiPerUnit;
    return sum + schemeKamai + emptyKamai;
  }, 0);

  const styles = {
    container: {
      backgroundColor: "#001f4d",
      color: "white",
      padding: 8,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: 480,
      margin: "auto",
      fontSize: 11,
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: 420,
      border: "1px solid white",
    },
    th: {
      padding: "6px 4px",
      border: "1px solid white",
      fontWeight: "bold",
      fontSize: 10,
      textAlign: "center",
      whiteSpace: "normal", // allow wrapping
      wordWrap: "break-word",
      lineHeight: 1.2,
    },
    variantTd: {
      border: "1px solid white",
      textAlign: "left",
      fontSize: 10,
      padding: "6px 8px",
      whiteSpace: "normal", // allow wrapping
      wordWrap: "break-word", // break long words
      width: 90,
    },
    td: {
      border: "1px solid white",
      textAlign: "center",
      fontSize: 10,
      padding: "6px 4px",
      whiteSpace: "nowrap",
    },
    select: {
      width: 40,
      fontSize: 10,
      padding: 1,
      borderRadius: 4,
      border: "none",
      textAlign: "center",
      backgroundColor: "white",
      color: "black",
    },
    headerText: {
      textAlign: "left",
      marginBottom: 10,
      fontWeight: "bold",
      fontSize: 20,
      color: "#ffe082",
    },
    totalKamaiDisplay: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 14,
      color: "#ffe082",
      textAlign: "left",
    },
  };

  const columnWidths = {
    variant: 90,
    ptr: 45,
    scheme: 65,
    emptyPackScheme: 80,
    purchased: 55,
    totalKamai: 90,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.headerText}>Retailer Savings Calculator</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, width: columnWidths.variant }}>
              Variant
            </th>
            <th style={{ ...styles.th, width: columnWidths.ptr }}>Net PTR</th>
            <th style={{ ...styles.th, width: columnWidths.scheme }}>Scheme</th>
            <th style={{ ...styles.th, width: columnWidths.emptyPackScheme }}>
              Empty Pack Scheme
            </th>
            <th style={{ ...styles.th, width: columnWidths.purchased }}>
              Purchased
            </th>
            <th style={{ ...styles.th, width: columnWidths.totalKamai }}>
              Total Kamai
              <br />
              (Savings)
            </th>
          </tr>
        </thead>
        <tbody>
          {skuData.map((sku) => {
            const qty = quantities[sku.variant] || 0;
            const schemeKamai = qty * sku.schemeSellIn;
            const emptyPackKamaiPerUnit =
              emptyPackKamaiValues[sku.variant] || 0;
            const emptyKamai = qty * emptyPackKamaiPerUnit;
            const total = schemeKamai + emptyKamai;

            return (
              <tr key={sku.variant}>
                <td style={styles.variantTd}>{toTitleCase(sku.variant)}</td>
                <td style={{ ...styles.td, width: columnWidths.ptr }}>
                  {sku.ptr.toFixed(1)}
                </td>
                <td style={{ ...styles.td, width: columnWidths.scheme }}>
                  {sku.schemeSellIn.toFixed(1)}
                </td>
                <td
                  style={{ ...styles.td, width: columnWidths.emptyPackScheme }}
                >
                  {emptyPackKamaiPerUnit > 0 ? emptyPackKamaiPerUnit : ""}
                </td>
                <td style={{ ...styles.td, width: columnWidths.purchased }}>
                  <select
                    value={qty}
                    onChange={(e) =>
                      handleQuantityChange(sku.variant, e.target.value)
                    }
                    style={styles.select}
                  >
                    {packOptions.map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ ...styles.td, width: columnWidths.totalKamai }}>
                  {total.toFixed(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={styles.totalKamaiDisplay}>
        TOTAL Kamai (Savings): {totalKamai.toFixed(1)}
      </div>
      <div style={styles.totalKamaiDisplay}>
        Total Weekly Kamai (Savings): {(totalKamai * 6).toFixed(1)}
      </div>
      <div style={styles.totalKamaiDisplay}>
        Total Monthly Kamai (Savings): {(totalKamai * 26).toFixed(1)}
      </div>
    </div>
  );
}
