import React, { useState } from 'react';

const MobileSavingsCalculator = () => {
  const [productCost, setProductCost] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [results, setResults] = useState(null);

  const calculateSavings = () => {
    const cost = parseFloat(productCost) || 0;
    const price = parseFloat(sellingPrice) || 0;
    const qty = parseInt(quantity) || 1;

    if (cost <= 0 || price <= 0) {
      alert('Please enter valid product cost and selling price');
      return;
    }

    const profit = price - cost;
    const profitMargin = ((profit / price) * 100).toFixed(2);
    const totalProfit = profit * qty;
    const totalRevenue = price * qty;
    const totalCost = cost * qty;

    setResults({
      profit: profit.toFixed(2),
      profitMargin,
      totalProfit: totalProfit.toFixed(2),
      totalRevenue: totalRevenue.toFixed(2),
      totalCost: totalCost.toFixed(2),
      quantity: qty
    });
  };

  const resetForm = () => {
    setProductCost('');
    setSellingPrice('');
    setQuantity('');
    setResults(null);
  };

  return (
    <div className="calculator-container" style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '24px'
      }}>Retailer Savings Calculator</h1>
      
      <div className="input-group" style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          fontWeight: 'bold',
          color: '#555'
        }}>Product Cost ($):</label>
        <input
          type="number"
          value={productCost}
          onChange={(e) => setProductCost(e.target.value)}
          placeholder="Enter product cost"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div className="input-group" style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          fontWeight: 'bold',
          color: '#555'
        }}>Selling Price ($):</label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          placeholder="Enter selling price"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div className="input-group" style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          fontWeight: 'bold',
          color: '#555'
        }}>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity (default: 1)"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div className="button-group" style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px'
      }}>
        <button
          onClick={calculateSavings}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Calculate
        </button>
        <button
          onClick={resetForm}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Reset
        </button>
      </div>

      {results && (
        <div className="results" style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            color: '#28a745',
            marginBottom: '15px',
            fontSize: '20px',
            textAlign: 'center'
          }}>Calculation Results</h2>
          
          <div className="result-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            paddingBottom: '8px',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontWeight: 'bold', color: '#555' }}>Profit per unit:</span>
            <span style={{ color: '#28a745', fontWeight: 'bold' }}>${results.profit}</span>
          </div>
          
          <div className="result-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            paddingBottom: '8px',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontWeight: 'bold', color: '#555' }}>Profit Margin:</span>
            <span style={{ color: '#28a745', fontWeight: 'bold' }}>{results.profitMargin}%</span>
          </div>
          
          <div className="result-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            paddingBottom: '8px',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontWeight: 'bold', color: '#555' }}>Total Cost:</span>
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>${results.totalCost}</span>
          </div>
          
          <div className="result-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            paddingBottom: '8px',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontWeight: 'bold', color: '#555' }}>Total Revenue:</span>
            <span style={{ color: '#17a2b8', fontWeight: 'bold' }}>${results.totalRevenue}</span>
          </div>
          
          <div className="result-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            paddingBottom: '8px',
            borderBottom: '2px solid #28a745'
          }}>
            <span style={{ fontWeight: 'bold', color: '#555' }}>Total Profit:</span>
            <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '18px' }}>${results.totalProfit}</span>
          </div>
          
          <div className="result-item" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>
            <span style={{ fontWeight: 'bold', color: '#555' }}>Quantity:</span>
            <span style={{ fontWeight: 'bold' }}>{results.quantity} units</span>
          </div>
        </div>
      )}
      
      <div style={{
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '12px',
        color: '#666'
      }}>
        Mobile-optimized for retailers
      </div>
    </div>
  );
};

export default MobileSavingsCalculator;
