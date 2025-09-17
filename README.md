# Retailer Savings Calculator

A mobile-optimized React application for calculating retailer earnings and profit margins. Perfect for retailers who need a quick and easy way to calculate profit margins, total earnings, and cost analysis for their products.

## Features

- 📱 **Mobile-optimized design** - Works perfectly on smartphones and tablets
- 💰 **Profit calculation** - Calculate profit per unit and total profit
- 📊 **Profit margin analysis** - See profit margins as percentages
- 🔄 **Real-time calculations** - Instant results as you type
- 📈 **Multi-product support** - Calculate for different quantities
- 🎯 **User-friendly interface** - Clean, intuitive design

## Demo

Try the live calculator: [Deploy on Netlify](#deployment-to-netlify) (instructions below)

## Local Development

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pgp23eshaan-a11y/retailer-savings-calculator.git
cd retailer-savings-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment to Netlify

### Option 1: Direct GitHub Integration (Recommended)

1. **Fork this repository** to your GitHub account

2. **Sign up/Login to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in with your GitHub account

3. **Deploy from GitHub**:
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your forked repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `build`
   - Click "Deploy site"

4. **Auto-deployment**: Your site will automatically redeploy whenever you push changes to the main branch!

### Option 2: Manual Deployment

1. **Build the project locally**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder onto the Netlify dashboard

### Custom Domain (Optional)

After deployment, you can:
- Use the provided Netlify URL (e.g., `amazing-calculator-123456.netlify.app`)
- Set up a custom domain in Netlify settings

## Usage

1. **Enter Product Cost**: Input the cost price of your product
2. **Enter Selling Price**: Input your intended selling price
3. **Set Quantity** (optional): Specify how many units you're calculating for
4. **View Results**: See instant calculations for:
   - Profit per unit
   - Profit margin percentage
   - Total cost
   - Total revenue
   - Total profit

## Project Structure

```
retailer-savings-calculator/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── MobileSavingsCalculator.js  # Main React component
│   └── index.js            # App entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Create React App** - Boilerplate and build setup
- **CSS-in-JS** - Styled components for mobile-first design
- **Responsive Design** - Optimized for all screen sizes

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with deployment:

- 📧 Create an issue in this repository
- 🌟 Star this repo if it helped you!
- 🔄 Share with other retailers who might find this useful

---

**Happy calculating! 💰📊**
