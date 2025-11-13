import React, { useState } from "react";

const skuData = [
  {
    variant: "B&H Gold Blue (Lights)",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 23,
    emptyPack: 0,
    netPtr: 290,
  },
  {
    variant: "B&H Special",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 23,
    emptyPack: 0,
    netPtr: 290,
  },
  {
    variant: "ICON",
    mrp: 95,
    ptr: 86.5,
    regularKamai: 8.5,
    schemeKamai: 16.5,
    emptyPack: 0,
    netPtr: 70,
  },
  {
    variant: "Clove",
    mrp: 150,
    ptr: 130,
    regularKamai: 20,
    schemeKamai: 22,
    emptyPack: 8,
    netPtr: 108,
  },
  {
    variant: "Connect",
    mrp: 300,
    ptr: 275,
    regularKamai: 25,
    schemeKamai: 25,
    emptyPack: 0,
    netPtr: 250,
  },
  {
    variant: "ICE BURST",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 13,
    emptyPack: 0,
    netPtr: 300,
  },
  {
    variant: "DOUBLE BURST",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 13,
    emptyPack: 0,
    netPtr: 300,
  },
  {
    variant: "Rich Taste (Regular)",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 6,
    emptyPack: 0,
    netPtr: 307,
  },
  {
    variant: "GFK SOCIAL 2 POD",
    mrp: 300,
    ptr: 275,
    regularKamai: 25,
    schemeKamai: 50,
    emptyPack: 20,
    netPtr: 225,
  },
  {
    variant: "GFK SOCIAL Red Line",
    mrp: 300,
    ptr: 275,
    regularKamai: 25,
    schemeKamai: 50,
    emptyPack: 20,
    netPtr: 225,
  },
  {
    variant: "GFK Blue 20",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 10,
    emptyPack: 0,
    netPtr: 275,
  },
  {
    variant: "GFK Red 20",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 10,
    emptyPack: 0,
    netPtr: 275,
  },
  {
    variant: "GFK RED SLEEKS",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 23,
    emptyPack: 18,
    netPtr: 290,
  },
  {
    variant: "GFK BLUE SLEEKS",
    mrp: 340,
    ptr: 313,
    regularKamai: 27,
    schemeKamai: 23,
    emptyPack: 18,
    netPtr: 290,
  },
  {
    variant: "GFK Mixpod",
    mrp: 170,
    ptr: 156.5,
    regularKamai: 13.5,
    schemeKamai: 10,
    emptyPack: 0,
    netPtr: 146.5,
  },
  {
    variant: "GFK Twinpod",
    mrp: 170,
    ptr: 156.5,
    regularKamai: 13.5,
    schemeKamai: 16.5,
    emptyPack: 0,
    netPtr: 140,
  },

  {
    variant: "GF SLK Red & Blue",
    mrp: 100,
    ptr: 90.1,
    regularKamai: 9.9,
    schemeKamai: 10.1,
    emptyPack: 10,
    netPtr: 80,
  },
  {
    variant: "AC Clove mint (Garam)",
    mrp: 120,
    ptr: 110,
    regularKamai: 10,
    schemeKamai: 10,
    emptyPack: 0,
    netPtr: 100,
  },
  {
    variant: "AC Fresh Mint",
    mrp: 120,
    ptr: 109,
    regularKamai: 11,
    schemeKamai: 15,
    emptyPack: 0,
    netPtr: 94,
  },
  {
    variant: "AC Smash",
    mrp: 120,
    ptr: 108,
    regularKamai: 12,
    schemeKamai: 14,
    emptyPack: 0,
    netPtr: 94,
  },
  {
    variant: "NAVYCUT",
    mrp: 95,
    ptr: 86.5,
    regularKamai: 8.5,
    schemeKamai: 0,
    emptyPack: 5,
    netPtr: 86.5,
  },
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
    mrp: 50,
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
            <th style={{ ...styles.th, width: columnWidths.mrp }}>MRP</th>
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
                <td style={{ ...styles.td, width: columnWidths.mrp }}>
                  {sku.mrp ? sku.mrp.toFixed(1) : ""}
                </td>
                <td style={{ ...styles.td, width: columnWidths.netPtr }}>
                  {sku.netPtr ? sku.netPtr.toFixed(1) : ""}
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
                  {sku.emptyPack || ""}
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
