import React, { useState } from "react";

const skuData = [
  {
    variant: "B&H Gold Blue",
    netPtr: 290.0,
    regularKamai: 27.0,
    schemeKamai: 23.0,
  },
  {
    variant: "B&H Special",
    netPtr: 290.0,
    regularKamai: 27.0,
    schemeKamai: 23.0,
  },
  {
    variant: "ICON",
    netPtr: 70.0,
    regularKamai: 8.5,
    schemeKamai: 16.5,
    emptyPack: 10,
  },
  {
    variant: "Clove",
    netPtr: 108.0,
    regularKamai: 20.0,
    schemeKamai: 22.0,
    emptyPack: 10,
  },
  { variant: "Connect", netPtr: 250.0, regularKamai: 25.0, schemeKamai: 25.0 },
  { variant: "Verve", netPtr: 160.0, regularKamai: 16.0, schemeKamai: 14.0 },
  {
    variant: "CLASSIC RICH TASTE",
    netPtr: 307.0,
    regularKamai: 27.0,
    schemeKamai: 6.0,
  },
  {
    variant: "ICE BURST",
    netPtr: 300.0,
    regularKamai: 27.0,
    schemeKamai: 13.0,
  },
  {
    variant: "DOUBLE BURST",
    netPtr: 300.0,
    regularKamai: 27.0,
    schemeKamai: 13.0,
  },
  {
    variant: "GFK RED 20's",
    netPtr: 303.0,
    regularKamai: 27.0,
    schemeKamai: 10.0,
  },
  {
    variant: "GFK BLUE 20's",
    netPtr: 303.0,
    regularKamai: 27.0,
    schemeKamai: 10.0,
  },
  {
    variant: "GFK RED SLEEKS",
    netPtr: 290.0,
    regularKamai: 27.0,
    schemeKamai: 23.0,
    emptyPack: 18,
  },
  {
    variant: "GFK BLUE SLEEKS",
    netPtr: 290.0,
    regularKamai: 27.0,
    schemeKamai: 23.0,
    emptyPack: 18,
  },
  {
    variant: "GFK SOCIAL 2 POD",
    netPtr: 225.0,
    regularKamai: 25.0,
    schemeKamai: 50.0,
    emptyPack: 20,
  },
  {
    variant: "GFK SOCIAL RED LINE",
    netPtr: 225.0,
    regularKamai: 25.0,
    schemeKamai: 50.0,
    emptyPack: 20,
  },
  {
    variant: "GFK Mixpod",
    netPtr: 146.5,
    regularKamai: 13.5,
    schemeKamai: 10.0,
  },
  {
    variant: "GFK Twinpod",
    netPtr: 140.0,
    regularKamai: 13.5,
    schemeKamai: 16.5,
  },
  {
    variant: "GF Indie Mint KINGS",
    netPtr: 140.0,
    regularKamai: 13.5,
    schemeKamai: 16.5,
    emptyPack: 10,
  },
  {
    variant: "GF SMART 2.0",
    netPtr: 75.0,
    regularKamai: 7.0,
    schemeKamai: 13.0,
  },
  {
    variant: "GF SLK RED",
    netPtr: 80.0,
    regularKamai: 9.9,
    schemeKamai: 10.1,
    emptyPack: 10,
  },
  {
    variant: "GF SLK BLUE",
    netPtr: 80.0,
    regularKamai: 9.9,
    schemeKamai: 10.1,
    emptyPack: 10,
  },
  {
    variant: "AC Clove mint (Garam)",
    netPtr: 100.0,
    regularKamai: 10.0,
    schemeKamai: 10.0,
  },
  {
    variant: "AC Fresh Mint",
    netPtr: 94.0,
    regularKamai: 11.0,
    schemeKamai: 15.0,
  },
  { variant: "AC Smash", netPtr: 94.0, regularKamai: 12.0, schemeKamai: 14.0 },
  { variant: "NAVYCUT", netPtr: 86.5, regularKamai: 8.5, emptyPack: 5 },
];

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

  const totalKamai = skuData.reduce((sum, sku) => {
    const qty = quantities[sku.variant] || 0;
    const regularKamai = qty * (sku.regularKamai || 0);
    const schemeKamai = qty * (sku.schemeKamai || 0);
    const emptyKamai = qty * (sku.emptyPack || 0);
    return sum + regularKamai + schemeKamai + emptyKamai;
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
      whiteSpace: "normal",
      wordWrap: "break-word",
      lineHeight: 1.2,
    },
    variantTd: {
      border: "1px solid white",
      textAlign: "left",
      fontSize: 10,
      padding: "6px 8px",
      whiteSpace: "normal",
      wordWrap: "break-word",
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
    netPtr: 65,
    regularKamai: 65,
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
            <th style={{ ...styles.th, width: columnWidths.netPtr }}>
              Net PTR
            </th>
            <th style={{ ...styles.th, width: columnWidths.regularKamai }}>
              Regular Kamai
            </th>
            <th style={{ ...styles.th, width: columnWidths.scheme }}>
              Scheme Kamai
            </th>
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
            const regularKamai = qty * (sku.regularKamai || 0);
            const schemeKamai = qty * (sku.schemeKamai || 0);
            const emptyKamai = qty * (sku.emptyPack || 0);
            const total = regularKamai + schemeKamai + emptyKamai;

            return (
              <tr key={sku.variant}>
                <td style={styles.variantTd}>{toTitleCase(sku.variant)}</td>
                <td style={{ ...styles.td, width: columnWidths.netPtr }}>
                  {sku.netPtr != null ? sku.netPtr.toFixed(1) : ""}
                </td>
                <td style={{ ...styles.td, width: columnWidths.regularKamai }}>
                  {sku.regularKamai ? sku.regularKamai.toFixed(1) : ""}
                </td>
                <td style={{ ...styles.td, width: columnWidths.scheme }}>
                  {sku.schemeKamai ? sku.schemeKamai.toFixed(1) : ""}
                </td>
                <td
                  style={{ ...styles.td, width: columnWidths.emptyPackScheme }}
                >
                  {sku.emptyPack ? sku.emptyPack : ""}
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
