
const nextConfig = {
 

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.omofreshfood.com/wp-json/wc/v3/:path*',
      },
    ];
  },

};

export default nextConfig;
