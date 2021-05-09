import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="-11" y="19" rx="3" ry="3" width="410" height="6" /> 
    <rect x="7" y="36" rx="0" ry="0" width="72" height="47" /> 
    <rect x="163" y="36" rx="0" ry="0" width="72" height="47" /> 
    <rect x="240" y="35" rx="0" ry="0" width="72" height="47" /> 
    <rect x="85" y="36" rx="0" ry="0" width="72" height="47" /> 
    <rect x="1" y="92" rx="3" ry="3" width="410" height="6" /> 
    <rect x="319" y="35" rx="0" ry="0" width="72" height="47" />
  </ContentLoader>
)

export default Loader
