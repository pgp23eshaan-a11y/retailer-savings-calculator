import React, { useState } from "react";

const skuData = [
  { variant: "icon", ptr: 86.5, schemeSellIn: 16.5 },
  { variant: "clove", ptr: 130.0, schemeSellIn: 22.0 },
  { variant: "connect", ptr: 275.0, schemeSellIn: 25.0 },
  { variant: "verve", ptr: 174.0, schemeSellIn: 14.0 },
  { variant: "balanced taste(milds)", ptr: 313.0, schemeSellIn: 6.0 },
  { variant: "ice burst", ptr: 313.0, schemeSellIn: 6.0 },
  { variant: "double burst", ptr: 313.0, schemeSellIn: 20.0 },
  { variant: "gfk social 2 pod", ptr: 275.0, schemeSellIn: 75.0 },
  { variant: "gfk social red line", ptr: 275.0, schemeSellIn: 75.0 },
  { variant: "gfk mixpod", ptr: 156.5, schemeSellIn: 10.0 },
  { variant: "gfk twinpod", ptr: 156.5, schemeSellIn: 16.5 },
  { variant: "gf indie mint kings", ptr: 156.5, schemeSellIn: 16.5 },
  { variant: "gf smart 2.0", ptr: 88.0, schemeSellIn: 18.0 },
  { variant: "ac clove mint (garam)", ptr: 110.0, schemeSellIn: 10.0 },
  { variant: "ac fresh mint", ptr: 109.0, schemeSellIn: 15.0 },
  { variant: "ac smash", ptr: 108.0, schemeSellIn: 14.0 },
  { variant: "navycut", ptr: 86.5, schemeSellIn: 8.5 },
];

const emptyPackKamaiValues = {
  icon: 10,
  "gf indie mint kings": 10,
  navycut: 5,
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
    const emptyKamai = qty * emptyPackKamaiPerUnit; // purchase = empty pack
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
      whiteSpace: "normal", // ✅ allow wrapping
      wordWrap: "break-word", // ✅ break long words
      width: 90, // ✅ slimmer column
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
            <th style={{ ...styles.th, width: columnWidths.ptr }}>PTR</th>
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
