import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppearOnScroll from "./AppearOnScroll";
import NotFound from "../pages/NotFound";

interface BlogPostProps {
  slug: string;
}

// Mock blog post data
const blogPosts = {
  "how-ai-is-revolutionizing-crypto-trading": {
    title: "How AI is Revolutionizing Crypto Trading",
    date: "May 10, 2025",
    author: "Alexandra Chen",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: `
      <p>In the fast-paced world of cryptocurrency trading, artificial intelligence is increasingly becoming the differentiating factor between profitable trades and missed opportunities. As markets operate 24/7 and price movements happen in milliseconds, human traders are turning to AI-powered solutions to gain a competitive edge.</p>
      
      <h2>The Evolution of Trading Technology</h2>
      
      <p>Trading has evolved significantly over the decades. From open outcry pits to electronic exchanges, and now to AI-driven algorithmic systems, the progression has consistently moved toward faster, more efficient, and more sophisticated methods of executing trades.</p>
      
      <p>Traditional trading algorithms were rule-based systems that would execute predefined strategies. While effective in certain market conditions, these algorithms lacked the adaptability needed for the volatile cryptocurrency market. This is where modern AI systems shine, as they can continuously learn from market data and adjust strategies accordingly.</p>
      
      <h2>Machine Learning Models in Trading</h2>
      
      <p>Modern trading platforms like Lunexa utilize several types of machine learning models, each serving a specific purpose:</p>
      
      <ul>
        <li><strong>Supervised Learning:</strong> Using historical price data and outcomes to predict future price movements.</li>
        <li><strong>Reinforcement Learning:</strong> Training models through a reward system that optimizes trading strategies over time.</li>
        <li><strong>Natural Language Processing (NLP):</strong> Analyzing news, social media, and other text sources to gauge market sentiment.</li>
        <li><strong>Deep Learning:</strong> Identifying complex patterns in market data that would be invisible to human traders.</li>
      </ul>
      
      <p>These technologies work together to create a comprehensive trading system that can analyze more data, recognize more patterns, and execute trades more quickly than any human trader.</p>
      
      <h2>Real-time Market Analysis</h2>
      
      <p>One of the most valuable capabilities of AI in crypto trading is real-time market analysis. AI systems can simultaneously monitor thousands of data points across multiple exchanges, including:</p>
      
      <ul>
        <li>Price movements across trading pairs</li>
        <li>Order book depth and changes</li>
        <li>Trading volume patterns</li>
        <li>Social media sentiment</li>
        <li>Regulatory news and announcements</li>
        <li>Macroeconomic indicators</li>
      </ul>
      
      <p>By processing this vast amount of information in real-time, AI can identify trading opportunities milliseconds before they become apparent to human traders.</p>
      
      <h2>Personalized Trading Strategies</h2>
      
      <p>Perhaps the most exciting development in AI-powered trading is the ability to create personalized trading strategies. At Lunexa, our AI assistant learns from your risk tolerance, investment goals, and trading history to develop strategies that align with your specific needs.</p>
      
      <p>This personalization extends beyond simple parameter adjustments. Our AI can develop entirely unique approaches based on your preferences, essentially creating a custom trading algorithm that works exclusively for you.</p>
      
      <h2>The Future of AI in Crypto Trading</h2>
      
      <p>As we look to the future, several trends are emerging in the AI trading space:</p>
      
      <ol>
        <li><strong>Quantum Computing Integration:</strong> As quantum computing becomes more accessible, it will enable even more complex models and faster processing.</li>
        <li><strong>Federated Learning:</strong> Trading platforms will leverage collective intelligence while maintaining user privacy.</li>
        <li><strong>Explainable AI:</strong> Systems will become more transparent, helping traders understand the reasoning behind trade recommendations.</li>
        <li><strong>Cross-chain Analytics:</strong> AI will analyze patterns across different blockchains to identify broader market trends.</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>The integration of AI into crypto trading represents a paradigm shift in how markets operate. As these technologies continue to evolve, we can expect even more sophisticated systems that blur the line between human and machine trading.</p>
      
      <p>At Lunexa, we're committed to staying at the forefront of this revolution, providing our users with cutting-edge AI tools that deliver real trading advantages in the complex world of cryptocurrency markets.</p>
    `,
  },
  "5-essential-risk-management-strategies": {
    title: "5 Essential Risk Management Strategies for Crypto Traders",
    date: "May 5, 2025",
    author: "Marcus Rivera",
    category: "Trading",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: `
      <p>Cryptocurrency trading offers unprecedented opportunities for profit, but it also comes with significant risk. The volatile nature of crypto markets can lead to substantial losses if proper risk management strategies aren't in place. In this article, we'll explore five essential risk management strategies that professional traders use to protect their portfolios.</p>
      
      <h2>1. Position Sizing</h2>
      
      <p>One of the most fundamental risk management techniques is proper position sizing. This refers to determining how much of your portfolio to allocate to a single trade.</p>
      
      <p>A common rule among professional traders is the 1% rule—never risk more than 1% of your total portfolio on a single trade. For more volatile assets like cryptocurrencies, some traders reduce this to 0.5% or even 0.25%.</p>
      
      <p>Example calculation:</p>
      <ul>
        <li>Total portfolio: $100,000</li>
        <li>Risk per trade (1%): $1,000</li>
        <li>If your stop loss is 10% below entry price, your position size should be $10,000</li>
      </ul>
      
      <p>This approach ensures that even a series of losing trades won't significantly deplete your capital, giving you staying power in the market.</p>
      
      <h2>2. Stop Loss and Take Profit Orders</h2>
      
      <p>Stop loss orders automatically close your position when the price reaches a predetermined level, limiting potential losses. Similarly, take profit orders automatically realize gains when prices reach your target.</p>
      
      <p>When setting stop losses for crypto trading, consider factors like:</p>
      
      <ul>
        <li>Asset volatility</li>
        <li>Support and resistance levels</li>
        <li>Recent price action</li>
        <li>Your risk tolerance</li>
      </ul>
      
      <p>At Lunexa, our AI trading assistant helps determine optimal stop loss and take profit levels based on market analysis and your risk profile.</p>
      
      <h2>3. Portfolio Diversification</h2>
      
      <p>Diversification is a time-tested risk management strategy that applies to all forms of investment, including cryptocurrency trading. A well-diversified crypto portfolio might include:</p>
      
      <ul>
        <li>Large-cap cryptocurrencies (Bitcoin, Ethereum)</li>
        <li>Mid-cap altcoins with strong fundamentals</li>
        <li>DeFi tokens</li>
        <li>NFT-related projects</li>
        <li>Infrastructure projects</li>
        <li>Stablecoins for capital preservation</li>
      </ul>
      
      <p>Beyond different cryptocurrencies, consider diversifying across trading strategies as well. Combining long-term holds, short-term trades, staking, and yield farming can create multiple streams of potential profit while reducing overall risk.</p>
      
      <h2>4. Risk-Reward Ratio Analysis</h2>
      
      <p>The risk-reward ratio compares the potential profit of a trade to its potential loss. Professional traders typically look for trades with a risk-reward ratio of at least 1:2, meaning the potential profit is at least twice the potential loss.</p>
      
      <p>For example, if your stop loss is set at $100 below your entry price, your take profit target should be at least $200 above your entry price.</p>
      
      <p>This approach ensures that even if only 50% of your trades are profitable, you'll still come out ahead overall. Lunexa's AI helps identify trading opportunities with favorable risk-reward ratios by analyzing historical price patterns and current market conditions.</p>
      
      <h2>5. Position Correlation Analysis</h2>
      
      <p>Understanding how different assets in your portfolio correlate with each other is crucial for effective risk management. If all your positions move in the same direction under the same market conditions, you're not truly diversified.</p>
      
      <p>For example, many altcoins are highly correlated with Bitcoin. During a market downturn, a portfolio consisting solely of cryptocurrencies might see significant losses across all positions. Including assets with negative or low correlation to Bitcoin can help mitigate this risk.</p>
      
      <p>Advanced correlation analysis requires sophisticated tools. Lunexa's platform includes correlation matrices and visualization tools that help you understand how your positions relate to each other and adjust accordingly.</p>
      
      <h2>Implementing These Strategies with AI</h2>
      
      <p>While these risk management strategies are powerful on their own, implementing them manually can be time-consuming and subject to human error. This is where AI-powered trading platforms like Lunexa provide significant advantages:</p>
      
      <ul>
        <li>Automated position sizing based on your risk parameters</li>
        <li>Dynamic stop loss and take profit adjustments as market conditions change</li>
        <li>Portfolio optimization recommendations to maintain proper diversification</li>
        <li>Real-time risk-reward analysis of potential trades</li>
        <li>Sophisticated correlation analysis across your entire portfolio</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Effective risk management is what separates successful crypto traders from those who eventually lose their capital. By implementing these five strategies—position sizing, stop loss/take profit orders, portfolio diversification, risk-reward analysis, and position correlation analysis—you can significantly improve your trading outcomes.</p>
      
      <p>At Lunexa, we've integrated these risk management principles into our AI trading platform, making sophisticated risk management accessible to traders of all experience levels. Remember, successful trading isn't just about making profitable trades—it's about protecting your capital so you can continue trading for the long term.</p>
    `,
  },
  "future-of-defi-and-ai-integration": {
    title: "The Future of Decentralized Finance and AI Integration",
    date: "April 28, 2025",
    author: "Sophia Williams",
    category: "DeFi",
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: `
      <p>Decentralized Finance (DeFi) has emerged as one of the most transformative applications of blockchain technology, creating an open, permissionless alternative to traditional financial systems. As the DeFi ecosystem matures, we're witnessing the beginning of its integration with artificial intelligence—a combination that promises to address current limitations and unlock new possibilities.</p>
      
      <h2>The Current State of DeFi</h2>
      
      <p>DeFi has grown from a niche concept to a thriving ecosystem with hundreds of billions of dollars in total value locked (TVL). Key components of the DeFi landscape include:</p>
      
      <ul>
        <li>Decentralized exchanges (DEXs)</li>
        <li>Lending and borrowing protocols</li>
        <li>Yield optimization platforms</li>
        <li>Stablecoins</li>
        <li>Insurance protocols</li>
        <li>Derivatives platforms</li>
        <li>Asset management protocols</li>
      </ul>
      
      <p>Despite its growth, DeFi still faces significant challenges. User experience remains complex, risk assessment is difficult, market inefficiencies persist, and regulatory uncertainty looms. These are precisely the areas where AI integration can make the most impact.</p>
      
      <h2>AI's Emerging Role in DeFi</h2>
      
      <p>As artificial intelligence continues to evolve, its applications within the DeFi space are expanding rapidly. Several key areas of integration are already showing promising results:</p>
      
      <h3>Risk Assessment and Management</h3>
      
      <p>AI models are increasingly being used to assess risks in DeFi protocols and investments. These systems analyze smart contract code, protocol parameters, historical performance, and on-chain activities to identify potential vulnerabilities or risks.</p>
      
      <p>For example, machine learning models can detect patterns that might indicate a potential exploit or flash loan attack before it happens, allowing users and protocols to take preventive measures.</p>
      
      <h3>Liquidity Optimization</h3>
      
      <p>Efficient capital allocation is crucial in DeFi. AI algorithms can analyze multiple protocols, yield opportunities, and risk factors to optimize liquidity deployment across the DeFi ecosystem.</p>
      
      <p>At Lunexa, our AI systems continuously monitor yield opportunities across dozens of protocols, automatically shifting funds to maximize returns while maintaining user-defined risk parameters.</p>
      
      <h3>Predictive Market Analytics</h3>
      
      <p>AI-powered predictive analytics are helping DeFi users navigate market volatility. These systems analyze on-chain data, trading volumes, wallet movements, and external factors to forecast potential market movements.</p>
      
      <p>The combination of transparent blockchain data and sophisticated AI creates unprecedented opportunities for market analysis that wasn't possible in traditional finance.</p>
      
      <h2>Emerging Integration Models</h2>
      
      <p>As we look to the future, several promising models for AI-DeFi integration are emerging:</p>
      
      <h3>1. AI-Governed Protocols</h3>
      
      <p>Some DeFi protocols are beginning to implement AI systems for governance decisions. Rather than relying solely on token holder votes, these protocols use AI to analyze market conditions and recommend parameter adjustments.</p>
      
      <p>For example, lending protocols could use AI to dynamically adjust interest rates and collateralization ratios based on market volatility and liquidity conditions.</p>
      
      <h3>2. Personalized DeFi Interfaces</h3>
      
      <p>One of the biggest barriers to DeFi adoption is complexity. AI-powered interfaces can simplify the user experience by presenting personalized recommendations and explanations.</p>
      
      <p>Imagine a DeFi dashboard that understands your financial goals, risk tolerance, and time horizon, then presents tailored opportunities across the entire ecosystem—all while explaining complex concepts in simple terms.</p>
      
      <h3>3. Cross-Chain Optimization</h3>
      
      <p>As DeFi expands across multiple blockchains, efficiently managing assets becomes increasingly complex. AI systems can optimize cross-chain deployments, taking into account gas fees, bridge security, liquidity depths, and yield opportunities.</p>
      
      <p>These systems will allow users to maintain a truly diversified DeFi portfolio across blockchains without needing to manually track dozens of positions.</p>
      
      <h2>Ethical Considerations and Challenges</h2>
      
      <p>The integration of AI and DeFi isn't without challenges. Several important considerations must be addressed as this combination evolves:</p>
      
      <h3>Decentralization vs. AI Centralization</h3>
      
      <p>Many AI systems require centralized infrastructure and proprietary models, which could conflict with DeFi's decentralization ethos. The development of decentralized AI frameworks will be crucial for maintaining the core principles of DeFi.</p>
      
      <h3>Algorithmic Bias</h3>
      
      <p>AI systems can perpetuate existing biases if not carefully designed and monitored. In financial systems, this could lead to unequal access or unfair treatment of certain user groups.</p>
      
      <h3>Transparency and Explainability</h3>
      
      <p>Complex AI models often function as "black boxes," making their decisions difficult to explain. In DeFi, where users need to understand risks, maintaining transparency in AI-driven decisions is essential.</p>
      
      <h2>The Road Ahead</h2>
      
      <p>The integration of AI and DeFi represents a new frontier in financial technology. As these technologies continue to evolve together, we can expect several developments:</p>
      
      <ul>
        <li>AI-native DeFi protocols designed from the ground up to leverage machine learning capabilities</li>
        <li>Decentralized AI networks that provide machine learning capabilities while maintaining the trustless nature of DeFi</li>
        <li>Advanced risk scoring systems that make DeFi more accessible to traditional financial institutions</li>
        <li>Regulatory frameworks that address the unique challenges of AI-powered financial systems</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The convergence of DeFi and AI represents one of the most exciting developments in financial technology. By addressing the current limitations of DeFi, AI integration has the potential to accelerate adoption and create more efficient, accessible, and secure financial systems.</p>
      
      <p>At Lunexa, we're committed to responsibly advancing this integration, developing AI solutions that enhance the DeFi experience while maintaining the core values of decentralization, transparency, and user control.</p>
      
      <p>The future of finance isn't just decentralized—it's intelligent, adaptive, and personalized in ways previously unimaginable.</p>
    `,
  },
  "beginners-guide-to-automated-crypto-trading": {
    title: "Beginner's Guide to Automated Crypto Trading",
    date: "April 15, 2025",
    author: "David Kim",
    category: "Beginners",
    image:
      "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: `
      <p>Automated crypto trading is revolutionizing how individuals interact with cryptocurrency markets. By leveraging algorithms and predefined rules, traders can execute strategies without constant manual intervention. This guide aims to introduce beginners to the world of automated crypto trading, demystifying the technology and providing practical steps to get started.</p>
      
      <h2>What is Automated Crypto Trading?</h2>
      
      <p>Automated crypto trading uses computer programs to buy and sell cryptocurrencies on your behalf based on a set of predetermined rules or algorithms. These systems can monitor the market 24/7, analyze multiple data points, and execute trades faster than any human could manually.</p>
      
      <p>The key components of automated trading include:</p>
      
      <ul>
        <li><strong>Trading Algorithms:</strong> Sets of rules that determine when to enter or exit positions</li>
        <li><strong>Technical Indicators:</strong> Mathematical calculations based on price and volume that inform trading decisions</li>
        <li><strong>Backtesting:</strong> Testing strategies against historical data to assess potential performance</li>
        <li><strong>Risk Management Systems:</strong> Mechanisms that protect your capital from excessive losses</li>
        <li><strong>Execution Systems:</strong> Interfaces that connect your strategy to exchanges for actual trading</li>
      </ul>
      
      <h2>Benefits of Automated Trading</h2>
      
      <p>For beginners, automated trading offers several significant advantages:</p>
      
      <h3>Emotion-Free Trading</h3>
      
      <p>Perhaps the most valuable benefit is the removal of emotional decision-making. Fear and greed often drive poor trading choices, but automated systems strictly follow their programming, ignoring emotional impulses.</p>
      
      <h3>24/7 Market Coverage</h3>
      
      <p>Unlike traditional markets, cryptocurrency exchanges operate continuously. Automated systems can monitor and trade at any hour, capturing opportunities that might occur while you're sleeping or otherwise occupied.</p>
      
      <h3>Improved Efficiency</h3>
      
      <p>Automated systems can analyze multiple markets and execute trades within milliseconds, far faster than manual trading allows.</p>
      
      <h3>Strategy Consistency</h3>
      
      <p>Once programmed, automated systems execute strategies consistently without deviation, allowing for more reliable performance analysis and improvement.</p>
      
      <h2>Types of Automated Trading Systems</h2>
      
      <p>Beginners should understand the main approaches to automated trading:</p>
      
      <h3>Rule-Based Systems</h3>
      
      <p>These systems follow specific, predefined rules for entering and exiting trades. For example: "Buy when the 50-day moving average crosses above the 200-day moving average, and sell when it crosses below."</p>
      
      <p>Rule-based systems are straightforward to understand and can be effective in trending markets, making them a good starting point for beginners.</p>
      
      <h3>AI-Powered Systems</h3>
      
      <p>More advanced automated trading solutions use artificial intelligence and machine learning to adapt to changing market conditions. These systems can identify patterns in market data and adjust their strategies accordingly.</p>
      
      <p>Platforms like Lunexa use sophisticated AI models to provide automated trading capabilities that evolve based on market performance and user preferences.</p>
      
      <h3>Copy Trading</h3>
      
      <p>An accessible entry point for beginners, copy trading allows you to automatically replicate the trades of experienced traders. This provides a way to leverage expertise while learning about market dynamics.</p>
      
      <h2>Getting Started: A Step-by-Step Approach</h2>
      
      <h3>Step 1: Education</h3>
      
      <p>Before diving into automated trading, build a foundation of knowledge about:</p>
      
      <ul>
        <li>Basic trading concepts (order types, risk management, etc.)</li>
        <li>Technical analysis fundamentals</li>
        <li>Cryptocurrency market dynamics</li>
        <li>Different trading strategies and their application</li>
      </ul>
      
      <h3>Step 2: Choose Your Approach</h3>
      
      <p>As a beginner, you have three main options for implementing automated trading:</p>
      
      <ol>
        <li><strong>Use a Consumer Platform:</strong> Solutions like Lunexa provide user-friendly interfaces for setting up automated trading with minimal technical knowledge.</li>
        <li><strong>Trading Bots:</strong> Services that offer pre-built strategies you can customize and deploy.</li>
        <li><strong>DIY Development:</strong> For those with programming skills, creating custom trading bots using languages like Python.</li>
      </ol>
      
      <p>For most beginners, starting with a user-friendly platform is the most accessible approach.</p>
      
      <h3>Step 3: Start Small</h3>
      
      <p>Begin your automated trading journey with small amounts of capital. This "tuition" approach lets you learn how automated systems work in real market conditions without risking substantial losses.</p>
      
      <h3>Step 4: Monitor and Adjust</h3>
      
      <p>Even with automation, regular monitoring is essential. Check performance metrics, ensure the system is functioning correctly, and make adjustments as needed.</p>
      
      <h2>Essential Risk Management for Automated Trading</h2>
      
      <p>Effective risk management is crucial for successful automated trading:</p>
      
      <h3>Position Sizing</h3>
      
      <p>Determine how much of your portfolio to allocate to each trade. A common guideline is risking no more than 1% of your total capital on any single trade.</p>
      
      <h3>Stop Loss Orders</h3>
      
      <p>Always implement stop loss orders to automatically exit positions if they move against you by a predefined amount.</p>
      
      <h3>Diversification</h3>
      
      <p>Spread your automated trading across different cryptocurrencies, strategies, and timeframes to reduce risk.</p>
      
      <h3>Regular Backtesting</h3>
      
      <p>Periodically review and backtest your strategies against recent market data to ensure they remain effective in current conditions.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      
      <p>Be aware of these frequent beginner mistakes:</p>
      
      <h3>Over-Optimization</h3>
      
      <p>Adjusting strategies to perfectly match historical data can lead to systems that perform poorly in live trading. Focus on robust strategies that work across various market conditions.</p>
      
      <h3>Neglecting Market Conditions</h3>
      
      <p>Automated strategies typically work best in specific market environments. Be prepared to pause your system when conditions change dramatically.</p>
      
      <h3>Unrealistic Expectations</h3>
      
      <p>Automated trading won't make you an overnight millionaire. Set realistic goals focused on consistent performance rather than dramatic gains.</p>
      
      <h3>Poor Security Practices</h3>
      
      <p>When using automated systems, security is paramount. Use strong passwords, two-factor authentication, and API keys with appropriate permission restrictions.</p>
      
      <h2>Getting Started with Lunexa</h2>
      
      <p>For beginners looking to explore automated crypto trading, Lunexa offers a user-friendly entry point:</p>
      
      <ol>
        <li>Create an account and connect your crypto wallet</li>
        <li>Set your risk tolerance and investment goals</li>
        <li>Choose from pre-configured AI trading strategies or customize your own</li>
        <li>Start with a small portion of your portfolio as you learn</li>
        <li>Monitor performance and adjust parameters as needed</li>
      </ol>
      
      <p>Our AI assistant guides you through each step, explaining concepts and recommending appropriate strategies based on your experience level and goals.</p>
      
      <h2>Conclusion</h2>
      
      <p>Automated crypto trading offers beginners a powerful way to participate in cryptocurrency markets with reduced emotional bias and improved efficiency. By starting with the right education, choosing appropriate tools, implementing sound risk management, and avoiding common pitfalls, you can build a solid foundation for your automated trading journey.</p>
      
      <p>Remember that automation is a tool, not a magic solution. The most successful traders combine technological advantages with continuous learning and careful risk management. As you gain experience, you'll develop a deeper understanding of which strategies work best for different market conditions and how to optimize your automated trading approach.</p>
    `,
  },
};

const BlogPost = ({ slug }: BlogPostProps) => {
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".appear-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible =
          elementTop < window.innerHeight - 100 && elementBottom > 0;

        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Add initial fade-in animation to the whole page
    document.body.classList.add("opacity-0");

    setTimeout(() => {
      document.body.classList.remove("opacity-0");
      document.body.classList.add(
        "transition-opacity",
        "duration-1000",
        "opacity-100"
      );
    }, 100);

    return () => {
      document.body.classList.remove(
        "transition-opacity",
        "duration-1000",
        "opacity-100"
      );
    };
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary opacity-20 rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary opacity-20 rounded-full filter blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AppearOnScroll>
              <Link
                to="/blog"
                className="inline-flex items-center text-secondary mb-8 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </Link>
            </AppearOnScroll>

            <AppearOnScroll delay={100}>
              <div className="mb-8">
                <span className="bg-secondary/90 text-black text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-light mt-4 mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {post.title}
                </h1>
                <div className="flex items-center text-white/60 mb-8">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={200}>
              <div className="mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-2xl border border-white/10 shadow-xl"
                />
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={300}>
              <div className="prose prose-lg prose-invert max-w-none glass-card p-8 md:p-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={400}>
              <div className="mt-16">
                <h3 className="text-2xl font-light mb-8 text-white">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,80,36h96a60.07,60.07,0,0,0,60,60V160a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm44,156a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M232,128.7c0-9.67-1.28-19.15-3.78-28.31-2.44-8.72-10.38-14.94-19.42-14.94H47.2A19.43,19.43,0,0,0,27.91,98.7c-2.53,9-3.91,18.08-3.91,28.35,0,10.49,1.08,21,6.15,31.36,5.69,11.68,17.2,19.59,31.85,19.59h136c13.47,0,25.2-7.55,30.85-19.53S232,138.3,232,128.7Z"
                        opacity="0.2"
                      ></path>
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v48A8,8,0,0,1,144,176ZM112,96V80a8,8,0,0,1,16,0V96a8,8,0,0,1-16,0Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={500}>
              <div className="mt-16 glass-card p-10">
                <h3 className="text-2xl font-light mb-4 text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/70 mb-8">
                  Get the latest insights and updates from Lunexa delivered
                  directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  />
                  <button className="neumorphic-button whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
