import { Layout } from "../components/Layout";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    TradingView?: any;
  }
}

const BtcChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartHeight, setChartHeight] = useState(600);

  useEffect(() => {
    const calculateHeight = () => {
      if (chartContainerRef.current) {
        const topOffset = chartContainerRef.current.getBoundingClientRect().top;
        const newHeight = window.innerHeight - topOffset - 40; // Reduced padding to 40px for just the footer
        setChartHeight(newHeight > 200 ? newHeight : 200);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  useEffect(() => {
    if (chartHeight <= 200) return;

    if (chartContainerRef.current) {
      chartContainerRef.current.innerHTML = '';
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView && chartContainerRef.current) {
        new window.TradingView.widget({
          width: "100%",
          height: chartHeight,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#1e1b4b",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: chartContainerRef.current.id,
          backgroundColor: "rgba(30, 27, 75, 0.4)",
          gridColor: "rgba(147, 51, 234, 0.1)",
          studies: [
            "RSI@tv-basicstudies",
            "MASimple@tv-basicstudies",
          ],
          overrides: {
            "paneProperties.leftAxisMargins": 0,
            "paneProperties.rightAxisMargins": 0,
          },
          disabled_features: ["left_toolbar"],
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      const scripts = document.head.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src === "https://s3.tradingview.com/tv.js") {
          document.head.removeChild(scripts[i]);
        }
      }
    };
  }, [chartHeight]);

  return (
    <Layout>
      <div className="h-full flex flex-col -ml-4 -mr-3 -mb-5"> {/* Added negative margin to extend full width */}
        <div 
          id="tradingview_chart_container" 
          ref={chartContainerRef} 
          className="w-full h-full"
        />
       
      </div>
    </Layout>
  );
};

export default BtcChart; 