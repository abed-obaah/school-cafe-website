import React from "react";

const StickyAdsFooter = () => {
  const handleCloseAds = () => {
    const adsElement = document.getElementById("sticky-ads");
    if (adsElement) {
      adsElement.style.display = "none";
    }
  };

  return (
    <>
      {/* Sticky Ads Section */}
      <div className="sticky-ads" id="sticky-ads">
        <div className="sticky-ads-close" onClick={handleCloseAds}>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
          </svg>
        </div>
        <div className="sticky-ads-content">
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", height: "70px", width: "100%" }}
            data-ad-client="ca-pub-4039679359165076"
            data-ad-slot="7174384454"
          ></ins>
          <script>
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </script>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <a href="https://schoolnews.info/">
          <i className="fa fa-home"></i>
          <span>Home</span>
        </a>
        <a href="https://schoolnews.info/category-school-cafe/">
          <i className="fa fa-list"></i>
          <span>Category</span>
        </a>
        <a href="https://schoolnews.info/search-page/">
          <i className="fa fa-search"></i>
          <span>Search</span>
        </a>
        <a href="https://whatsapp.com/channel/0029Va4mZrK8fewhKYnjU83Y">
          <i className="fa fa-users"></i>
          <span>Community</span>
        </a>
        <a href="https://schoolnews.info/tools/">
          <i className="fa fa-wrench"></i>
          <span>Tools</span>
        </a>
      </div>
    </>
  );
};

export default StickyAdsFooter;
