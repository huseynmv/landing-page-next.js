import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  images:{
    remotePatterns:[
      {
        hostname:'**',
        protocol: "https"
      }
    ]
  }
  
};

export default nextConfig;
